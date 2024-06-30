import React, { useState } from 'react';
import { Container, Flex, Box } from "@chakra-ui/react";
import {
  Dropzone,
  Footer,
  InfoCard,
  Instructions,
  Navbar,
} from './';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


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
      Great job! Just a quick question...
    </div>
  );
};

export const Landing: React.FC = () => {
  const navigateTo = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);

  // Function to handle drop success with animation
  const handleDropSuccess = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      console.log("Drop succeeded! Navigating to feedback page...");
      navigateTo('/feedback'); // Navigate to '/feedback' route upon drop success
    }, 5000); // Adjust timing as per your animation duration
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
          backdropFilter={showAnimation ? "blur(5px)" : "none"} // Apply blur filter conditionally
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
          {/* Conditionally render components based on animation state */}
          <AnimatePresence>
            {showAnimation ? (
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
              <RoundedTextBox/>
              </>
            ) : (
              <>
                <InfoCard />
                <Instructions />
                <Dropzone onDropSuccess={handleDropSuccess} />
              </>
            )}
          </AnimatePresence>
        </Container>
      </Flex>
      <Footer />
    </>
  );
};

