// Landing.tsx
import React, { useState, useEffect } from 'react';
import { Container, Flex, Box, VStack } from "@chakra-ui/react";
import {
  Dropzone,
  Footer,
  InfoCard,
  Instructions,
  Navbar,
} from './';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanIcon } from './Icon/ScanIcon';
// Award.tsx



const Award: React.FC = () => {
    return (
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
          +50 points!
        </motion.div>
        <div style={{
          backgroundColor: '#5f9a39',
          opacity: 0.8,
          color: 'white',
          padding: '10px 20px',
          borderRadius: '10px',
          textAlign: 'center',
          display: 'inline-block',
        }}>
          Great job on showing us what you learned! <br />
          Just a quick question...
        </div>
      </>
    );
  };

export const Landing: React.FC = () => {
  const navigateTo = useNavigate();
  const [state, setState] = useState<'normal' | 'analyzing' | 'success'>('normal');

  useEffect(() => {
    if (state === 'success') {
      const timer = setTimeout(() => {
        navigateTo('/feedback');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state, navigateTo]);

  // Function to handle drop success with animation
  const handleDropSuccess = () => {
    setState('analyzing');
    setTimeout(() => {
      setState('success');
    }, 3000); // Simulate analyzing time of 3 seconds
  };

  return (
    <>
      <Navbar />
      <Flex flex={1} position="relative">
        {/* Background overlay with blur effect */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          backdropFilter={state === 'success' ? "blur(5px)" : "none"} // Apply blur filter conditionally
          zIndex={1}
          pointerEvents="none" // Ensures clicks go through to underlying content
        />

        <Container
          mt={{ base: 4, md: 10 }}
          maxW={"container.xl"}
          mb={{ base: 4, md: 10 }}
          display={"flex"}
          flex={1}
          alignItems={"center"}
          justifyContent={"center"} // Center content horizontally and vertically
          flexDirection={"column"}
          position="relative" // Ensure child elements respect stacking context
          zIndex={2} // Ensure content is above the blurred overlay
        >
          {/* Conditionally render components based on state */}
          <AnimatePresence>
            {state === 'normal' && (
              <>
                <InfoCard />
                <Instructions />
                <Dropzone onDropSuccess={handleDropSuccess} />
              </>
            )}
            {state === 'analyzing' && (
              <>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Analyzing...     
              </motion.div>
              <ScanIcon size={120} color={"#5f9a39"} />
              </>
            )}
            {state === 'success' && <Award />}
          </AnimatePresence>
        </Container>
      </Flex>
      <Footer />
    </>
  );
};
