import cloudy from "./assets/cloudy.svg";
import Cloudy from "./components/Cloudy";

function App() {
  return (
    <div className="min-h-full bg-[#E9F5FA] grid place-items-center ">
      {WeekData.map((d) => (
        <Day
          key={d.date}
          dayOfWeek={d.dayOfWeek}
          date={d.date}
          bgColor={d.bgColor}
          tempF={d.tempF}
          tempC={d.tempC}
          mainTextColor={d.mainTextColor}
          subTextColor={d.subTextColor}
          offsetWeatherIcon={d.offsetWeatherIcon}
        />
      ))}
    </div>
  );
}

function Day({
  dayOfWeek,
  date,
  bgColor,
  tempF,
  tempC,
  mainTextColor,
  subTextColor,
  offsetWeatherIcon = "",
}: {
  dayOfWeek: string;
  date: number;
  bgColor: string;
  tempF: number;
  tempC: number;
  mainTextColor: string;
  subTextColor: string;
  offsetWeatherIcon?: string;
}) {
  return (
    <section className="text-center ">
      <div className="grid gap-2 text-epimetheus font-krona-one">
        <span className="text-2xl">{dayOfWeek}</span>
        <span className="text-7xl">{date}</span>
      </div>
      <div
        className={`relative pb-6 pt-14 px-7 shadow-day rounded-[60px] ${bgColor}`}
      >
        <Cloudy
          className={`absolute ${offsetWeatherIcon ? offsetWeatherIcon : ""}`}
        />
        <div className={`font-oswald text-[145px] ${mainTextColor}`}>
          {tempF}
        </div>
      </div>
    </section>
  );
}

const WeekData = [
  {
    dayOfWeek: "WED",
    date: 8,
    weather: "cloudy",
    tempF: 71,
    tempC: 28,
    precipitation: 84,
    bgColor: "bg-epimetheus",
    mainTextColor: "text-reviving-green",
    subTextColor: "text-freezing-vapor",
  },
];

export default App;
