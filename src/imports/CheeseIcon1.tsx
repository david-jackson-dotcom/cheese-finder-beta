import svgPaths from "./svg-ew8rtjerj9";

function Group() {
  return (
    <div className="absolute inset-[13.28%_1.66%_13.26%_14.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 71">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pa08f000} fill="url(#paint0_radial_2227_83)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(25.1737 92.1181 -92.1185 25.1736 21.8898 -10.0834)" gradientUnits="userSpaceOnUse" id="paint0_radial_2227_83" r="1">
            <stop stopColor="#FFA000" />
            <stop offset="1" stopColor="#FF5F00" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 14">
        <g id="Group">
          <path d={svgPaths.p26ed6a80} fill="url(#paint0_radial_2227_77)" id="Vector" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(0.810607 -95.4981 -95.4953 -0.134861 1.08497 95.7356)" gradientUnits="userSpaceOnUse" id="paint0_radial_2227_77" r="1">
            <stop stopColor="#FFA000" />
            <stop offset="1" stopColor="#FF5F00" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 14">
        <g id="Group">
          <path d={svgPaths.p171df00} fill="url(#paint0_radial_2227_80)" id="Vector" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(0.809867 -95.498 -95.4951 -0.134098 1.08562 11.9205)" gradientUnits="userSpaceOnUse" id="paint0_radial_2227_80" r="1">
            <stop stopColor="#FFA000" />
            <stop offset="1" stopColor="#FF5F00" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 14">
        <g id="Group">
          <path d={svgPaths.p1bf54580} fill="url(#paint0_radial_2227_74)" id="Vector" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-95.4981 -0.810607 -0.134861 95.4952 49.1342 -33.8997)" gradientUnits="userSpaceOnUse" id="paint0_radial_2227_74" r="1">
            <stop stopColor="#FFA000" />
            <stop offset="1" stopColor="#FF5F00" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0.53%_1.66%_0.5%_1.67%]" data-name="Group">
      <Group />
      <div className="absolute flex inset-[84.95%_34.67%_0.5%_57.83%] items-center justify-center">
        <div className="flex-none h-[13.383px] rotate-[344.797deg] scale-y-[-100%] skew-x-[0.405deg] w-[3.914px]">
          <Group1 />
        </div>
      </div>
      <div className="absolute flex inset-[0.53%_56.97%_84.92%_35.53%] items-center justify-center">
        <div className="flex-none h-[13.383px] rotate-[344.796deg] scale-y-[-100%] skew-x-[0.405deg] w-[3.914px]">
          <Group2 />
        </div>
      </div>
      <div className="absolute flex inset-[57.54%_83.99%_34.86%_1.67%] items-center justify-center">
        <div className="flex-none h-[13.22px] rotate-[255.202deg] scale-y-[-100%] skew-x-[359.595deg] w-[3.962px]">
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Artboard() {
  return (
    <div className="absolute contents inset-0" data-name="Artboard1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector"></g>
      </svg>
      <Group4 />
    </div>
  );
}

export default function CheeseIcon() {
  return (
    <div className="relative size-full" data-name="cheese-icon 1">
      <Artboard />
    </div>
  );
}