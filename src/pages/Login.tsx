import loginIllustration from "@/assets/login-illustration.svg";

const Login = () => {
  const handleGoogleLogin = () => {
    // UI only - no actual auth yet
    console.log("Google login clicked");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 px-8 py-8 lg:px-12">
      {/* Main Rounded Container */}
      <div className="w-full max-w-[1240px] bg-foreground rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="flex min-h-[600px]">
          {/* Left Side - Login Form (Dark) */}
          <div className="flex w-full lg:w-1/2 flex-col justify-between p-8 lg:p-12">
            {/* Logo */}
            <div>
              <h1 className="text-2xl font-bold text-background">Clstr</h1>
            </div>

            {/* Login Content */}
            <div className="flex flex-col items-start justify-center flex-1 py-8">
              <div className="w-full space-y-8">
                {/* Welcome Text */}
                <div className="space-y-3">
                  <h2 className="text-4xl lg:text-5xl font-bold text-background leading-tight">
                    Welcome<br />Back
                  </h2>
                  <p className="text-muted-foreground text-base">
                    Login into your account
                  </p>
                </div>

                {/* Google Login Button */}
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primary/20 hover:bg-primary/30 transition-colors duration-200"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="text-background font-medium">Continue with Google</span>
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div>
              <p className="text-xs text-muted-foreground">
                <a href="#" className="hover:text-background transition-colors">
                  Terms & Conditions
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-background transition-colors">
                  Support
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-background transition-colors">
                  Customer Care
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Illustration (hidden on mobile like original) */}
          <div 
            className="hidden lg:flex w-1/2 items-center justify-center p-8 rounded-3xl m-2 bg-white"
          >
            <img
              src={loginIllustration}
              alt="Login illustration"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
