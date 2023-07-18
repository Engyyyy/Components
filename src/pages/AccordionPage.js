import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "asjdgk",
      label: "Section 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in eleifend mi. Proin gravida dolor eget mattis mattis. Suspendisse tempor tincidunt felis, quis gravida felis pharetra sit amet. Etiam mi odio, placerat quis interdum ut, tincidunt id odio. Quisque convallis bibendum diam id facilisis. Quisque id risus venenatis, elementum massa non, mollis nisl. Curabitur semper leo orci, vel auctor metus tempor vel. Vestibulum bibendum vulputate metus, non venenatis mauris fringilla non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque hendrerit mauris ac nunc tincidunt lacinia. Vivamus in iaculis odio. Morbi gravida ultrices iaculis. Curabitur diam eros, auctor sit amet erat et, finibus ornare dui. Etiam eget turpis eu mi consequat egestas et id est.",
    },
    {
      id: "kusdg7",
      label: "Section 2",
      content:
        "Duis blandit pharetra nibh, in condimentum felis placerat volutpat. Nunc placerat aliquam leo ac maximus. Nunc gravida nisi et nunc blandit, ut ornare dui egestas. Fusce pellentesque lacus suscipit sem gravida, ac commodo leo pellentesque. Duis rhoncus nec lacus vel viverra. Vestibulum consequat orci vitae lectus commodo malesuada. Integer pharetra ex quis nibh pellentesque placerat non nec ex. Nam commodo vestibulum turpis sit amet scelerisque.",
    },
    {
      id: "jzbc8z",
      label: "Section 3",
      content:
        "Phasellus et nibh ex. Suspendisse leo turpis, tempor semper nisi at, fermentum vehicula odio. Aenean pulvinar pharetra enim, vel bibendum dolor. Vestibulum ultrices volutpat velit. Vivamus egestas lorem purus, quis feugiat erat dignissim a. Morbi aliquam congue egestas. Morbi lacus elit, sodales ut ligula sit amet, placerat condimentum metus. In eget libero quis est porta blandit. Aenean vitae odio sed massa tempus suscipit. Ut vitae lacus sodales ante imperdiet tristique eu sit amet metus. Aliquam consequat arcu at feugiat sagittis. Donec maximus eu nisi sed pharetra.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
