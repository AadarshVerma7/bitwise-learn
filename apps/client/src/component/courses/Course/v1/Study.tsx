const colors = {
  primary_Bg: "bg-[#121313]",
  secondary_Bg: "bg-[#1E1E1E]",
  primary_Hero: "bg-[#129274]",
  primary_Hero_Faded: "bg-[rgb(18, 146, 116, 0.24)]",
  secondary_Hero: "bg-[#64ACFF]",
  secondary_Hero_Faded: "bg-[rgb(100, 172, 255, 0.56)]",
  primary_Font: "text-[#FFFFFF]",
  secondary_Font: "text-[#B1AAA6]",
  special_Font: "text-[#64ACFF]",
  accent: "#B1AAA6",
  accent_Faded: "bg-[rgb(177, 170, 166, 0.41)]",
  primary_Icon: "white",
  secondary_Icon: "black",
  special_Icon: "#64ACFF",
  border_Accent: "border-[rgb(177, 170, 166, 0.41)]",
};

export default function Study() {
  return (
    <div className="h-full w-full grid grid-cols-3 grid-rows-[auto_1fr] gap-5 overflow-hidden">

      <div className={`col-span-2 row-span-1 rounded-xl overflow-hidden ${colors.primary_Bg} aspect-video`}>
        <iframe
          src="https://www.youtube.com/embed/xR3V5Ow2dTI"
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      <div className={`col-span-1 row-span-1 ${colors.primary_Bg} rounded-xl p-4 ${colors.special_Font} font-mono flex flex-col justify-start`}>
        <h3 className="mb-3">What You’ll Learn</h3>
        <ul className={`text-sm space-y-2 ${colors.secondary_Font}`}>
          <li>HTML structure</li>
          <li>Tags & attributes</li>
          <li>First webpage</li>
        </ul>
      </div>

      <div className={`col-span-3 row-span-1 ${colors.primary_Font} font-mono overflow-hidden`}>
        <h2 className="text-xl mb-2">Getting Started with HTML</h2>

        <div className={`flex items-center gap-3 mb-3 text-sm ${colors.secondary_Font}`}>
          <span>John Doe</span>
          <span>•</span>
          <span>Beginner</span>
        </div>

        <p className={`text-sm leading-relaxed ${colors.secondary_Font} pb-2 border-b-2 ${colors.border_Accent}`}>
          Id sint voluptate incididunt occaecat qui mollit quis sint Lorem anim magna deserunt est anim velit. Lorem voluptate mollit est excepteur irure esse adipisicing ut elit id. Officia minim est quis adipisicing non do excepteur aute dolor. Labore voluptate nisi quis esse est voluptate do magna sint. Officia proident sint labore nisi irure esse consequat mollit amet consectetur do Lorem laborum.
        </p>

        <button className="mt-4 px-3 py-1 bg-black rounded-md text-sm w-fit">
          🔗 Resources
        </button>
      </div>

    </div>
  );
}
