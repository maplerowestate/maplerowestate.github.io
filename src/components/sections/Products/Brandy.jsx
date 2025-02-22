import React from 'react';
import { motion } from 'framer-motion'; // Optional for animations

const Brandy = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Crafting Mead Brandy in the Cognac Style</h2>
      <p className="text-center text-gray-600 mb-6">
        Our mead brandy follows the time-honored methods of Cognac production, ensuring a product that is rich, complex, and refined. Every step from creating the mead to distilling and aging is carefully executed to produce a world-class brandy.
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
                  {/* Making Mead Image */}
                  <img src="brandy-mead.jpg" alt="Making Mead" className="image" />
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
                  {/* Distillation Image */}
                  <img src="brandy-distill.jpg" alt="Distillation" className="image" />
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
                  <img src="brandy-aging.jpg" alt="Aging" className="image" />
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
                  <img src="brandy-quality.jpg" alt="Quality Control" className="image" />
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
                  <h3 className="text-xl font-semibold text-gray-800">Step 1: Make Mead</h3>
                  <p className="text-gray-500 mt-2">
                    The first step is creating our base mead, using the finest honey and ingredients. Since distillation creates nothing new, but rather refines the base, our process ensures that the fermentation produces a clean and balanced mead that will form the foundation for the brandy.
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
                  <h3 className="text-xl font-semibold text-gray-800">Step 2: Distillation</h3>
                  <p className="text-gray-500 mt-2">
                    The mead undergoes careful distillation, where we extract the highest quality spirit. This step is crucial to concentrate flavors and produce a smooth, refined liquid that will carry the complexity of the Cognac style.
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
                    After distillation, the spirit is aged in oak barrels, which imparts depth and complexity. The aging process in a controlled environment is critical for creating the signature smoothness and character of Cognac-style brandy.
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
                    Every batch is rigorously tested to meet our high standards. From flavor profile to clarity, we ensure each bottle reflects the meticulous craftsmanship and rich heritage of Cognac production.
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

export default Brandy;

