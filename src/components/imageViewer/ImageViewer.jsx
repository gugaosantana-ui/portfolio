import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ImageViewer = ({ images, index, onClose, onPrev, onNext }) => {
  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          key="modal"
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key="content"
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              className="absolute top-3 right-3 text-white p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
              onClick={onClose}
            >
              <X size={22} />
            </button>

            <img
              src={images[index]}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-black/40 text-white rounded-r-xl hover:bg-black/70 transition"
              onClick={onPrev}
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-black/40 text-white rounded-l-xl hover:bg-black/70 transition"
              onClick={onNext}
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageViewer;
