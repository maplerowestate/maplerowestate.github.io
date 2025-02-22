import React from 'react';
import { motion } from 'framer-motion'; // Optional for animations

const Hay = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Premium Hay Production</h2>
      <p className="text-center text-gray-600 mb-6">
        Our estate takes pride in producing high-quality hay, specially crafted for the needs of the equestrian community. Using sustainable practices and the finest techniques, we harvest our hay at peak freshness to ensure it's nutrient-rich and perfectly suited for horses. With attention to detail at every step—from cutting to delivery—we guarantee hay that supports optimal health and performance for your horses.
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
              >
                <div className="image-container mb-4">
                  {/* Cutting Image */}
                  <img src="hay-cut.jpg" alt="Cutting" className="w-full h-40 object-cover" />
                </div>
              </motion.div>
            </td>
            <td className="w-1/4 p-2 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="image-container mb-4">
                  {/* Raking Image */}
                  <img src="hay-rake.jpg" alt="Raking" className="w-full h-40 object-cover" />
                </div>
              </motion.div>
            </td>
            <td className="w-1/4 p-2 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="image-container mb-4">
                  {/* Packaging Image */}
                  <img src="hay-package.jpg" alt="Packaging" className="w-full h-40 object-cover" />
                </div>
              </motion.div>
            </td>
            <td className="w-1/4 p-2 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="image-container mb-4">
                  {/* Delivery Image */}
                  <img src="hay-deliver.jpg" alt="Delivery" className="w-full h-40 object-cover" />
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
                  <h3 className="text-xl font-semibold text-gray-800">Step 1: Cutting</h3>
                  <p className="text-gray-500 mt-2">
                    Hay quality depends on the variety and weather conditions, so seeding is very important. Mow to harvest at the optimal time to ensure it’s nutrient-rich and ready for drying.
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
                  <h3 className="text-xl font-semibold text-gray-800">Step 2: Raking</h3>
                  <p className="text-gray-500 mt-2">
                    After cutting, hay is raked into windrows to promote even drying and prevent mold by improving airflow.
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
                  <h3 className="text-xl font-semibold text-gray-800">Step 3: Packaging</h3>
                  <p className="text-gray-500 mt-2">
                    Once dried, hay is baled into compact, secure bundles to maintain its quality and prevent moisture absorption.
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
                  <h3 className="text-xl font-semibold text-gray-800">Step 4: Delivery</h3>
                  <p className="text-gray-500 mt-2">
                    After packaging, hay is sold and delivered efficiently to farms, stables, or feedlots to ensure a fresh and nutritious supply.
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

export default Hay;

