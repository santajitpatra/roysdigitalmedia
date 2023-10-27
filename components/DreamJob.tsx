"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { jobrequirement } from "../config/careers";

const DreamJob = () => {
  return (
    <div className="flex flex-col md:flex-row pt-10">
      <div className="p-10 md:pr-16 md:pl-10 lg:pr-20 lg:pl-16 md:w-1/2">
        <h2 className="text-3xl text-primary-dark_l lg:text-4xl mb-10">
          Looking to join The Dream Team?
        </h2>
        <p className="text-primary-dark_l text-base md:text-lg">
          We are always looking to add new talented individuals to the team and
          expand the scope of our services to new locations. We offer in-person
          or virtual employment depending on the position.
        </p>
      </div>
      <div className="p-10 md:pr-16 md:pl-10 lg:pr-20 lg:pl-16 md:w-1/2">
        {jobrequirement.map((requirement, i) => (
          <Accordion.Root
            key={i}
            className="w-full border-b border-primary-dark"
            type="single"
            collapsible
            // orientation="horizontal"
          >
            <Accordion.Item
              value={`item-${requirement.id}`}
              className=" overflow-hidden "
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 font-medium text-xl text-primary-dark_l transition-all [&[data-state=open]>svg]:rotate-180">
                  <span>{requirement.name}</span>
                  <ChevronDownIcon
                    className="h-4 w-4 shrink-0 transition-transform duration-200 "
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="AccordionContent overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ">
                <div className="my-5">
                  <ul>
                    {requirement.category.map((item, itemIndex) => (
                      <li
                        className="text-primary-dark_l text-base md:text-lg"
                        key={itemIndex}
                      >
                        {typeof item === "object" ? (
                          <ul>
                            {item.preferred.map(
                              (preferredItem, preferredIndex) => (
                                <li
                                  className="text-primary-dark_l text-sm md:text-base pt-3 pl-4"
                                  key={preferredIndex}
                                >
                                  <span>&#9830;</span>
                                  {""} {preferredItem}
                                </li>
                              )
                            )}
                          </ul>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>
                  {/* {requirement.category.map((item) => (
                    <p
                      className="text-primary-dark_l text-base md:text-lg"
                      key={item}
                    >
                      {item}
                    </p>
                  ))} */}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        ))}
      </div>
    </div>
  );
};

export default DreamJob;
