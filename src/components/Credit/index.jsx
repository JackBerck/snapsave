export default function Credit() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center font-semibold normal-font-size">
        This website is inspired by{" "}
        <a
          className="bg-primary text-white-base p-1"
          href="https://savefrom.net/"
          target="_blank"
        >
          SaveFrom
        </a>{" "}
        and powered by{" "}
        <a
          className="bg-primary text-white-base p-1"
          href="https://api.ryzendesu.vip/"
          target="_blank"
        >
          Ryzen API
        </a>
        .
      </p>
    </div>
  );
}
