import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="bg-system-100 rounded-lg p-3 sm:mx-auto sm:max-w-md sm:w-full">
        <div>
          <Image src="/images/logo.svg" alt="logo" width={34} height={100} />
        </div>
      </div>
    </div>
  );
}
