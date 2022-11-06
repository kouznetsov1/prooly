interface StepperProps {
  steps: number;
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = (props) => {
  const renderLI = () => {
    let listItems: Array<any> = [];
    for (let i = 0; i < props.steps; i++) {
      if (i === 0) {
        listItems.push(
          <li
            className="relative w-40 after:content-[''] after:absolute after:left-[50%]
            after:top-[200%] after:w-8 after:h-8 after:bg-yellow-300
            after:rounded-full after:z-50 after:border-4 after:border-black"
          ></li>
        );
      } else if (i === props.steps - 1) {
        listItems.push(
          <li
            className="relative w-40 
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.8rem)] before:w-full before:h-1 
            before:bg-white
            after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-8 after:h-8 
            after:bg-white after:rounded-full after:z-50 after:border-4 after:border-black"
          ></li>
        );
      } else if (i < props.currentStep) {
        listItems.push(
          <li
            className="relative w-40
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.8rem)] before:w-full before:h-1 
            before:bg-yellow-300
            after:content-[''] after:border-4 after:border-black after:absolute after:left-[50%] after:top-[200%] after:w-8 after:h-8 
            after:bg-yellow-300 after:rounded-full after:z-50"
          ></li>
        );
      } else {
        listItems.push(
          <li
            className="relative w-40
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.8rem)] before:w-full before:h-1 
            before:bg-neutral-400
            after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-8 after:h-8 
            after:bg-neutral-400 after:rounded-full after:z-50"
          ></li>
        );
      }
    }
    return listItems;
  };

  return (
    <div className="w-96 h-24 m-8">
      <ol className="flex m-auto">{renderLI()}</ol>
    </div>
  );
};
