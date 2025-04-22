"use client";

import { type ReactNode, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Collapsible(props: {
  title: string;
  children: ReactNode;
  defaultState?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(props.defaultState ?? false);

  return (
    <>
      <h3 className="flex items-center">
        <motion.button
          animate={{ rotate: isOpen ? 0 : -90 }}
          onClick={() => setIsOpen(!isOpen)}
          className="float-left mr-3 -ml-8"
        >
          <IoIosArrowDropdown />
        </motion.button>
        {props.title}
      </h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
