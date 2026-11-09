const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full flex justify-center py-10 text-shadow-gray-500 ">
      {" "}
      @{year} Ujang sutinsa
    </div>
  );
};

export default Footer;
