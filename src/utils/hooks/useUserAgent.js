const useUserAgent = (userAgent) => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
      userAgent
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

export default useUserAgent;
