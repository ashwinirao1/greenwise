import { HttpException } from '@/exceptions/HttpException';
import { openAIHelper } from '@/server';
import { isBase64Image } from '@/utils/data';
import { Service } from 'typedi';

@Service()
export class OpenaiService {
  public async validateImage(image: string): Promise<unknown> {
    if (!isBase64Image(image)) throw new HttpException(400, 'Invalid image format');

    const prompt = `
                    Analyze the image provided. The image MUST satisfy all of the following criteria:
                        1. It must contain the language related to sustainability where the content is about being sustainable.
                    Based on the content of the image generate a multiple choice question with one correct answer about a topic of sustainability from the image.
                    Please respond using a JSON object without comments and do not add any other descriptions and comments:
                    {
                    "validityFactor": number, // 0-1, 1 if it satisfies all the criteria, 0 otherwise
                    " Question": string, // Ask a multiple choice question based on the content from the image and the answer will be something close to what content is about, make sure that question is fairly simple. 
                    }
                    `;

    const gptResponse = await openAIHelper.askChatGPTAboutImage({
      base64Image: image,
      prompt,
    });

    const responseJSONStr = openAIHelper.getResponseJSONString(gptResponse);

    return openAIHelper.parseChatGPTJSONString(responseJSONStr);
  }
}
