const IntroWidget = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="grid gap-5">
        <div className="text-center text-3xl font-sansPro font-semibold">
          Avinash Ratnam
        </div>
        <div className="text-center text-5xl font-sansPro font-semibold pt-5">
          Developer. Designer. word
        </div>
        <div className="text-center text-lg font-sansPro pt-5">
          Hello there, my name is Avinash and I'm a UI/UX Designer and Developer
          from Bangalore, India.
        </div>
        <div className="text-center text-lg font-sansPro pt-3">
          Ever since I was a child, I've been in love with Apple's Design,
          that's probably why this portfolio seems so familiar ;)
        </div>
        <div className="flex gap-5 items-center justify-center">
          <a className="bg-linkedinBlue text-white font-semibold px-5 py-3 rounded-full">
            Contact
          </a>
          <a className="text-linkedinBlue text-xl font-semibold">About me</a>
        </div>
      </div>
    </div>
  );
};

export default IntroWidget;
