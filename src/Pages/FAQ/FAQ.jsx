
// const FAQ = () => {
//     return (
//         <div className="container mx-auto bg-base-200 pt-10 mt-8 pb-20">
//             <h2 className="text-4xl text-center font-bold my-4">Questions about travel spotplace?</h2>
//             <h2 className="text-4xl text-center font-bold my-4">We've got the answers!</h2>
//             <p className="text-center mt-4 mb-10 text-gray-400">Below are some common questions about travel spotplace
//             </p>
//             <div className="container mx-auto flex flex-wrap justify-center ">
            
//             <div className="space-y-5">
//             <div className="collapse collapse-arrow bg-white shadow-xl w-[900px]">
//                  <input type="radio" name="my-accordion-2" defaultChecked /> 
//                  <div className="collapse-title text-xl font-medium">
//                     Where are your travel spot locations?
//                  </div>
//              <div className="collapse-content"> 
//                  <p>The travel spot locations .....</p>
//              </div>
//              </div>
//               <div className="collapse collapse-arrow bg-white shadow-xl">
//              <input type="radio" name="my-accordion-2" /> 
//              <div className="collapse-title text-xl font-medium">
//                  How do I choose a travel Spotplace?
//              </div>
//          <div className="collapse-content"> 
//              <p>hello</p>
//          </div>
//              </div>
//  <           div className="collapse collapse-arrow bg-white shadow-xl">
//                  <input type="radio" name="my-accordion-2" /> 
//                  <div className="collapse-title text-xl font-medium">
//                      How do I check in to my travel spotplace?
//                  </div>
//                  <div className="collapse-content"> 
//                      <p>hello</p>
//                  </div>
 
          
//              </div>
//             </div>
//          </div>  
//         </div>  
//     );
// };

// export default FAQ;










const FAQ = () => {
    return (
        <div className="container mx-auto bg-base-200 pt-10 mt-8 pb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-4">Questions about travel spotplace?</h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-4">We've got the answers!</h2>
            <p className="text-center mt-4 mb-10 text-gray-400">Below are some common questions about travel spotplace</p>
            <div className="container mx-auto flex flex-wrap justify-center">
                <div className="space-y-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <div className="collapse collapse-arrow bg-white shadow-xl">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-lg md:text-xl font-medium">
                            Where are your travel spot locations?
                        </div>
                        <div className="collapse-content">
                            <p>The travel spot locations .....</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white shadow-xl">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-lg md:text-xl font-medium">
                            How do I choose a travel Spotplace?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white shadow-xl">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-lg md:text-xl font-medium">
                            How do I check in to my travel spotplace?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;

