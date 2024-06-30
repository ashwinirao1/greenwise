import axios from "axios";
import { ReceiptData } from "./type";
import { backendURL } from "../config";

import { HttpException } from '@/exceptions/HttpException';
import { openAIHelper } from '@/server';
import { isBase64Image } from '@/utils/data';
import { Service } from 'typedi';

export type Response = {
  validation: {
    validityFactor: number;
    descriptionOfAnalysis: string;
  };
};

export const submitReceipt = async (
  data: ReceiptData
): Promise<Response> => {
  try {
    const response = await axios.post(
      `${backendURL}/submitReceipt`, 
      data
    );

    return response.data;
  } catch (error: unknown) {
    console.error("Error posting data:", error);
    throw error;
  } 
};
