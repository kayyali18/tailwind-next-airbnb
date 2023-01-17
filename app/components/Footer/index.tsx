const Footer = () => {
  return (
    <footer className="w-full">
      <div className=" mx-auto grid grid-cols-1 justify-items-center gap-y-10 bg-gray-100 px-32 py-14 text-gray-600 md:grid-cols-4 hover:[&>*>p]:cursor-pointer hover:[&>*>p]:underline hover:[&>*>p]:decoration-rose-300">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold uppercase underline decoration-rose-400">
            About
          </h5>
          <p>Newsroom</p>
          <p>How Airbnb works</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold uppercase underline decoration-rose-400">
            Community
          </h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>Its a pretty awesome clone</p>
          <p>Referrals Accepted</p>
          <p>Hawabnb</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold uppercase underline decoration-rose-400">
            Host
          </h5>
          <p>Next w/ React</p>
          <p>Building</p>
          <p>For People</p>
          <p>The Community</p>
          <p>Join Me</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold uppercase underline decoration-rose-400">
            Support
          </h5>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>Say Hi</p>
          <p>Bloopity Boop</p>
          <p>Bam Bam Shizam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
