import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

type TButtonProps = {
    title: string,
    image: string,
    content: ReactNode
}

export default function LinearCard({ title, image, content }: TButtonProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <AnimatePresence>
                <motion.button
                    layoutId="card"
                    onClick={() => setIsExpanded(true)}
                    className="bg-[#141516] hover:bg-[#191a1b] text-white transition-colors duration-300 ease-in-out px-6 pb-8 rounded-3xl w-[360px] cursor-pointer group"
                    style={{ position: "relative" }}
                >
                    {/* <motion.div layoutId="circle" className="max-w-[300px] mx-auto aspect-square rounded-full bg-white/80 mb-12" /> */}
                    <motion.img src={image} layoutId="image" className="w-full mx-auto " />
                    <motion.div className="flex items-end justify-between -mt-10 gap-4">
                        <motion.p layoutId="title" className="text-2xl text-left">
                            {title}
                        </motion.p>
                        <motion.div layoutId="action" className="rounded-full transition-colors duration-300 ease-in-out border border-white/10 group-hover:border-white/20 group-hover:bg-white/20 aspect-square px-4 shrink-0 flex items-center justify-center">
                            <svg className="scale-125" width="16" height="16" viewBox="0 0 16 16" fill="#9c9da1" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z"></path>
                            </svg>
                        </motion.div>
                    </motion.div>
                </motion.button>
            </AnimatePresence>

            <AnimatePresence>
                {isExpanded && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsExpanded(false)}
                            className="fixed inset-0 bg-black/80 z-40"
                        />
                        <motion.div
                            layoutId="card"
                            className="fixed bottom-0 left-1/2 -translate-x-1/2 h-max bg-[#0f1011] text-white rounded-t-3xl z-50 overflow-hidden"
                            style={{ position: "fixed" }}
                        >
                            <motion.button
                                onClick={() => setIsExpanded(false)}
                                layoutId="action"
                                className="absolute cursor-pointer right-6 top-6 rounded-full transition-colors duration-300 ease-in-out border border-white/10 hover:border-white/20 hover:bg-white/20 aspect-square px-4 shrink-0 flex items-center justify-center"
                            >
                                <svg className="scale-125" width="16" height="16" viewBox="0 0 16 16" fill="#9c9da1" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L8 6.939L11.9697 2.96967C12.2626 2.67678 12.7374 2.67678 13.0303 2.96967C13.3232 3.26256 13.3232 3.73744 13.0303 4.03033L9.061 8L13.0303 11.9697C13.2966 12.2359 13.3208 12.6526 13.1029 12.9462L13.0303 13.0303C12.7374 13.3232 12.2626 13.3232 11.9697 13.0303L8 9.061L4.03033 13.0303C3.73744 13.3232 3.26256 13.3232 2.96967 13.0303C2.67678 12.7374 2.67678 12.2626 2.96967 11.9697L6.939 8L2.96967 4.03033C2.7034 3.76406 2.6792 3.3474 2.89705 3.05379L2.96967 2.96967Z"></path></svg>
                            </motion.button>
                            <div className=" overflow-auto p-6 w-[70dvw] h-[90dvh]">
                                {/* <motion.div layoutId="image" className="mx-auto aspect-square rounded-full bg-white/80 mb-6 mt-20" /> */}
                                <motion.img src={image} layoutId="image" className="w-full mx-auto" />
                                <div className="max-w-[560px] mx-auto -mt-40">
                                    <motion.p layoutId="title" className="text-5xl mb-4">
                                        {title}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-gray-300"
                                    >
                                        {content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}