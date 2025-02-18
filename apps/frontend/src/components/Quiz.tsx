import React, { useState } from 'react';
import { Container, Flex, Button, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import quizData from './mockData/mockQuiz.json'; // Adjust the import path based on your project structure




const styles = {
    box: {
      backgroundColor: '#5f9a39',
      opacity: 0.8,
      color: 'white',
      padding: '10px 20px',
      borderRadius: '10px',
      textAlign: 'center',
      display: 'inline-block',
    },
  };
  
  const RoundedTextBox = () => {
    return (
      <div style={styles.box}>
        Nice work! You earned 100 more points, check your wallet $$$
      </div>
    );
  };

export const Quiz = () => {
  const history = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const { questions } = quizData;
  const currentQuestion = questions[currentQuestionIndex];

  // Function to handle submission of the quiz answer
  const handleSubmit = () => {
    const correctAnswer = currentQuestion.options.find(option => option.correct);
    if (selectedOption === correctAnswer.id) {
      setIsAnswered(true); // Mark the question as answered

      // Show animation for correct answer and navigate to home
      setShowAnimation(true); // Show +50 points animation
      console.log("Questions successfully answered, transferd 100 points to the user.")
      setTimeout(() => {
        history('/');
      }, 5000); // Navigate to home after 2 seconds (adjust timing as needed)
    } else {
      setShowTryAgain(true); // Show "Try again" indication
    }
  };

  return (
    <Flex flex={1} justifyContent="center" alignItems="center">
      <Container maxW={"container.xl"} textAlign="center">
        {currentQuestion && (
          <AnimatePresence>
            {!isAnswered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Text fontSize="xl" fontWeight="bold" mt={4}>
                  {currentQuestion.question}
                </Text>
                <RadioGroup onChange={(value) => setSelectedOption(value)} value={selectedOption}>
                  <Stack direction="column" mt={4}>
                    {currentQuestion.options.map(option => (
                      <Button
                        key={option.id}
                        variant="outline"
                        colorScheme={selectedOption === option.id ? 'green' : 'teal'}
                        value={option.id}
                        disabled={isAnswered}
                        onClick={() => setSelectedOption(option.id)}
                        style={{ fontWeight: selectedOption === option.id ? 'bold' : 'normal' }}
                      >
                        {option.text}
                      </Button>
                    ))}
                  </Stack>
                </RadioGroup>
                <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
                  Submit Answer
                </Button>
                {showTryAgain && (
                  <Text mt={2} color="red.500" fontWeight="bold">
                    Try again!
                  </Text>
                )}
              </motion.div>
            )}
            {isAnswered && (
              <>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'gold',
                  fontSize: '5rem',
                  fontWeight: 'bold',
                }}
              >
                +100 points!
              </motion.div>
              <RoundedTextBox/>
              </>
            )}
          </AnimatePresence>
        )}
      </Container>
    </Flex>
  );
};
