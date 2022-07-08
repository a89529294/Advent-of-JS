import Cloudy from "./components/Cloudy";
import Sunny from "./components/Sunny";

function App() {
  return (
    <div className="min-h-full bg-[#E9F5FA] grid place-items-center grid-cols-7">
      {WeekData.map((d) => (
        <Day
          key={d.date}
          dayOfWeek={d.dayOfWeek}
          date={d.date}
          Weather={d.Weather}
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
  Weather,
  bgColor,
  tempF,
  tempC,
  mainTextColor,
  subTextColor,
  offsetWeatherIcon,
}: {
  dayOfWeek: string;
  date: number;
  Weather: React.FC<{ className: string }>;
  bgColor: string;
  tempF: number;
  tempC: number;
  mainTextColor: string;
  subTextColor: string;
  offsetWeatherIcon: string;
}) {
  return (
    <section className="text-center w-[165px] ">
      <div className="grid gap-2 text-epimetheus font-krona-one">
        <span className="text-2xl">{dayOfWeek}</span>
        <span className="text-7xl">{date}</span>
      </div>
      <div
        className={`flex flex-col items-center relative pb-6 pt-14 shadow-day rounded-[60px] ${bgColor}`}
      >
        <Weather className={`${offsetWeatherIcon}`} />
        {offsetWeatherIcon ? <div className="h-40"></div> : null}

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
    Weather: Cloudy,
    tempF: 71,
    tempC: 28,
    precipitation: 84,
    bgColor: "bg-epimetheus",
    mainTextColor: "text-reviving-green",
    subTextColor: "text-freezing-vapor",
    offsetWeatherIcon: "absolute -left-7",
  },
  {
    dayOfWeek: "Thu",
    date: 9,
    Weather: Sunny,
    tempF: 65,
    tempC: 30,
    precipitation: 84,
    bgColor: "bg-reviving-green",
    mainTextColor: "text-epimetheus",
    subTextColor: "text-devil-blue",
    offsetWeatherIcon: "",
  },
];

export default App;
