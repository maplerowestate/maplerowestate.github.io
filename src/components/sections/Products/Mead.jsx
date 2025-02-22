import React from 'react';
import { motion } from 'framer-motion'; // Optional for animations

const Mead = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Crafting the Perfect Mead</h2>
      <p className="text-center text-gray-600 mb-6">
        From sourcing the ingredients to quality control, every step in crafting our mead is carefully managed.
      </p>

      {/* Table Layout with Fixed Column Widths */}
      <table className="w-full mx-auto table-fixed">
        <tbody>
          <tr>
            <td className="hay-text w-1/4 p-2 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center max-w-xs"
              >
                <div className="image-container mb-4">
                  {/* Sourcing Image */}
                  <img src="mead-sourcing.jpg" alt="Sourcing" className="image" />
                </div>
              </motion.div>
            </td>
            <td className="w-1/4 p-2 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center justify-center text-center max-w-xs"
              >
                <div className="image-container mb-4">
                  {/* Fermentation Image */}
                  <img src="mead-fermentation.jpg" alt="Fermentation" className="image" />
                </div>
              </motion.div>
            </td>
            <td className="w-1/4 p-2 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center justify-center text-center max-w-xs"
              >
                <div className="image-container mb-4">
                  {/* Aging Image */}
                  <img src="mead-aging.jpg" alt="Aging" className="image" />
                </div>
              </motion.div>
            </td>
            <td className="w-1/4 p-2 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center justify-center text-center max-w-xs"
              >
                <div className="image-container mb-4">
                  {/* Quality Control Image */}
                  <img src="mead-quality.jpg" alt="Quality Control" className="image" />
                </div>
              </motion.div>
            </td>
          </tr>
          <tr>
            <td>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="image-text mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Step 1: Sourcing</h3>
                  <p className="text-gray-500 mt-2">
                    We carefully source premium honey, fruits, and herbs from trusted local suppliers to create the perfect base for our mead.
                  </p>
                </div>
              </motion.div>
            </td>
            <td>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="image-text mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Step 2: Fermentation</h3>
                  <p className="text-gray-500 mt-2">
                    Our fermentation process is carefully controlled to ensure the best flavor development, using specific temperatures and yeast strains.
                  </p>
                </div>
              </motion.div>
            </td>
            <td>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="image-text mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Step 3: Aging</h3>
                  <p className="text-gray-500 mt-2">
                    We carefully age the mead to enhance its smoothness and complexity, ensuring it develops its full flavor profile.
                  </p>
                </div>
              </motion.div>
            </td>
            <td>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="image-text mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Step 4: Quality Control</h3>
                  <p className="text-gray-500 mt-2">
                    Every batch is rigorously tested to ensure that it meets our high standards, balancing flavor and quality for the perfect mead.
                  </p>
                </div>
              </motion.div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mead;

