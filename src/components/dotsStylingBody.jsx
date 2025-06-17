import React from "react";

function DotsStylingBody() {
  return (
    <div className="absolute inset-0 size-full -z-10">
      <svg
        aria-hidden="true"
        className="fill-foreground/15 pointer-events-none absolute inset-0 size-full -z-10"
      >
        <defs>
          <pattern
            id="dot-pattern"
            width={25}
            height={25}
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x={0}
            y={0}
          >
            <circle id="pattern-circle" cx={10} cy={10} r="1.25" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#dot-pattern)"
        />
      </svg>
      <div className="absolute inset-0 size-full bg-radial-[at_50%_50%] from-transparent via-background/5 to-background via-70% to-95%" />
    </div>
  );
}

export default DotsStylingBody;
