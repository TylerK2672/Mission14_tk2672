import joelHeadshot from '../img/JoelHiltonHeadshot.jpg';

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Joel Hilton
          </h1>
          <h4 className="text-4xl font-bold tracking-tight">
            The greatest movie list
          </h4>
          <div>
            <div class="mb-12 lg:mb-0">
              <img src={joelHeadshot} class="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
