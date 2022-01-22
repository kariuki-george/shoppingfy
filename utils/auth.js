export default (getServerSideProps) =>{
  return async (ctx) => {
    const { req } = ctx;
    if (req.headers.cookie) {
      //check if refresh token exists
      const tokens = req.headers.cookie.split(";");
      const token = tokens.find((token) => token.includes("refreshJwt"));

      if (!token) {
        return {
          redirect: {
            permanent: false,
            destination: "/landing",
          },
        };
      }
    }
    return await getServerSideProps(ctx);
  };
}
