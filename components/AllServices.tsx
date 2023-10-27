import { AllServicesDB } from "../config/services";
import { Container } from "@radix-ui/themes";


const AllServices = () => {
  return (
    <div>
      {AllServicesDB.map((srevice) => (
        <Container className="px-10" size={"3"} key={srevice.id}>
          <div className="flex flex-col md:flex-row  justify-center py-10 md:py-20 border-t border-primary-dark">
            <div className="md:w-1/2 md:mr-10">
              <h2 className="text-2xl md:text-3xl text-primary-dark_l ">
                {srevice.title}
              </h2>
              <p className="text-base lg:text-lg pt-5  font-thin text-primary-dark_l">
                {srevice.description}
              </p>
            </div>
            <div className="md:w-1/2 md:ml-16">
              {srevice.category.map((categoryItem) => (
                <li
                  key={categoryItem}
                  className="text-base lg:text-lg pt-5  font-thin text-primary-dark_l"
                >
                  {categoryItem}
                </li>
              ))}
            </div>
          </div>
        </Container>
      ))}
    </div>
  );
};

export default AllServices;
