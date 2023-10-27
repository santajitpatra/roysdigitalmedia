'use client'
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Container, Heading } from '@radix-ui/themes'
import Button from './ui/Button';

const servicesItems = [
  {
    id:"01",
    title: "Content Creation",
    description: "Make your brand stand out on social media.Keep up with what’s trending and break through the clutter with targeted content creation strategies.",
  },
  {
    id:"02",
    title: "Social Media Management",
    description: "Grow your social media following strategically. Let the experts manage and maintain your social profiles so you can focus on other aspects of your business.",
  },
  {
    id:"03",
    title: "Brand Development",
    description: "Distinguishing your brand from the rest. Create the foundation for how your brand is perceived. Define your voice, imagery, and online presence. ",
  }, {
    id:"04",
    title: "Consulting",
    description: "Learn what strategies will work best for your brand and receive a guided plan on how to maintain your marketing internally.",
  }, {
    id:"05",
    title: "Web Design / Development",
    description: "Enhance your online presence and develop the foundational platform for reaching the world around you.Guide more traffic to your business with strategic SEO practices and more.",
  }, {
    id:"06",
    title: "Event Planning",
    description: "Carefully curate and organize any event with skilled planners.Create a memorable experience for all with ease and smooth- running operations.",
  }
]

const ServicesHome = () => {
  return (
    <Container size={"2"} className="w-full h-5/6 bg-primary px-5 py-10">
      <Heading
        size={"8"}
        weight={"regular"}
        align={"center"}
        mt={"9"}
        className="py-10"
      >
        Services
      </Heading>

      {servicesItems.map((service, i) => (
        <Accordion.Root
          key={i}
          className="w-full border-b border-primary-dark"
          type="single"
          collapsible
        >
          <Accordion.Item
            value={`item-${service.id}`}
            className=" overflow-hidden"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 font-medium text-xl transition-all [&[data-state=open]>svg]:rotate-180">
                <span>{service.title}</span>
                <ChevronDownIcon
                  className="h-4 w-4 shrink-0 transition-transform duration-200 "
                  aria-hidden
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ">
              <p className="my-5">{service.description}</p>{" "}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      ))}

      <div className="text-center my-10">
        <Button name="view Details" url="/services" />
      </div>
    </Container>
  );
}

export default ServicesHome
