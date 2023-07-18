import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Buttons", path: "/buttons" },
    { label: "Accordion", path: "/accordion" },
    { label: "Dropdown", path: "/dropdown" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        key={link.label}
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
