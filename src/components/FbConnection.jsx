import { LoginSocialFacebook } from "reactjs-social-login";
const FbConnection = () => {
  return (
    <div className="bg-white w-[350px] items-center absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] p-7 flex flex-col rounded-md m-auto">
      <h3 className="text-lg font-semibold m-3 text-center">
        Facebook Page Integration
      </h3>
      <LoginSocialFacebook
        className="w-full"
        appId="2059682021099286"
        onResolve={(Response) => {
          console.log(Response);
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        <button className="mx-auto w-full text-white font-semibold mt-3 p-2 bg-[#1e4d91] rounded-md">
          Connect Page
        </button>
      </LoginSocialFacebook>
    </div>
  );
};

export default FbConnection;
