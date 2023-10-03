import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
    var stepPercentage = 0;
    if (page === "pageone") {
        stepPercentage = 6;
    } else if (page === "pagetwo") {
        stepPercentage = 16;
    } else if (page === "pagethree") {
        stepPercentage = 26;
    } else if (page === "pagefour") {
        stepPercentage = 36;
    } else if (page === "pagefive") {
        stepPercentage = 46;
    } else if (page === "pagesix") {
        stepPercentage = 56;
    } else if (page === "pageseven") {
        stepPercentage = 66;
    } else if (page === "pageeight") {
        stepPercentage = 76;
    } else if (page === "pagenine") {
        stepPercentage = 86;
    }
    else if (page === "pageten") {
        stepPercentage = 100;
    }
    else {
        stepPercentage = 0;
    }

    return (
        <ProgressBar percent={stepPercentage}>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("1")}
                    >
                        <span className="top-label">24.06.23</span>
                        {'AR'}
                        <span className="bottom-label">24.06.23</span>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("2")}
                    >
                        <span className="top-label">24.06.23</span>
                        {'CF'}
                        <span className="bottom-label">24.06.23</span>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("3")}
                    >
                        <span className="top-label">24.06.23</span>
                        {'AF'}
                        <span className="bottom-label">24.06.23</span>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("4")}
                    >
                        <span className="top-label">24.06.23</span>
                        {'SI'}
                        <span className="bottom-label">24.06.23</span>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("5")}
                    >
                        <span className="top-label">24.06.23</span>
                        {'OL'}
                        <span className="bottom-label">24.06.23</span>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("6")}
                    >
                        <span className="top-label">24.06.23</span>
                        {'TF'}
                        <span className="bottom-label">24.06.23</span>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("7")}
                    >
                        <span className="top-label">24.06.23</span>
                        {'VP'}
                        <span className="bottom-label">24.06.23</span>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("8")}
                    >
                        <span className="top-label">24.06.23</span>
                        {'VA'}
                        <span className="bottom-label">24.06.23</span>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("9")}
                    >
                        <span className="top-label">24.06.23</span>
                        {'CW'}
                        <span className="bottom-label">24.06.23</span>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("10")}
                    >
                        <span className="top-label">24.06.23</span>
                        {'CN'}
                        <span className="bottom-label">24.06.23</span>
                    </div>
                )}
            </Step>
        </ProgressBar>
    );
};

export default MultiStepProgressBar;
