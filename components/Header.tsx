const Header = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className='mb-12 flex justify-center align-center'>
        <h1 className="text-5xl font-black	">{children}</h1>
      </div>
    );
  };
  
  export default Header;
  