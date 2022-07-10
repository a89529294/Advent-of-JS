import React from "react";
import Low from "./components/Low";
import Precipitation from "./components/Precipitation";
import Cloudy from "./components/Cloudy";
import Sunny from "./components/Sunny";
import Stormy from "./components/Stormy";
import Snowy from "./components/Snowy";
import PartlyCloudy from "./components/PartlyCloudy";
import Rainy from "./components/Rainy";

function App() {
  return (
    <div className="min-h-full bg-[#E9F5FA] grid place-items-center w-max px-5 min-w-full">
      <div className="flex justify-start gap-8">
        {WeekData.map((d) => (
          <Day
            key={d.date}
            dayOfWeek={d.dayOfWeek}
            date={d.date}
            Weather={d.Weather}
            bgColor={d.bgColor}
            tempH={d.tempH}
            tempL={d.tempL}
            precipitation={d.precipitation}
            mainTextColor={d.mainTextColor}
            subTextColor={d.subTextColor}
            offsetWeatherIcon={d.offsetWeatherIcon}
          />
        ))}
      </div>
    </div>
  );
}

function Day({
  dayOfWeek,
  date,
  Weather,
  bgColor,
  tempH,
  tempL,
  precipitation,
  mainTextColor,
  subTextColor,
  offsetWeatherIcon,
}: {
  dayOfWeek: string;
  date: number;
  Weather: React.FC;
  bgColor: string;
  tempH: number;
  tempL: number;
  precipitation: number;
  mainTextColor: string;
  subTextColor: string;
  offsetWeatherIcon: string;
}) {
  function InfoContainer({ children }: { children: React.ReactNode }) {
    return (
      <div className={`flex ${subTextColor} gap-2 items-center font-krona-one`}>
        {children}
      </div>
    );
  }

  return (
    <section className="text-center w-[165px] flex flex-col gap-4">
      <div className="grid gap-2 text-epimetheus font-krona-one">
        <span className="text-2xl">{dayOfWeek}</span>
        <span className="text-7xl">{date}</span>
      </div>
      <div
        className={`flex flex-col items-center relative pb-6 shadow-day rounded-[60px] ${bgColor}`}
      >
        <div className={`grid items-end h-52 `}>
          <div className={`${offsetWeatherIcon}`}>
            <Weather />
          </div>
        </div>
        <div
          className={`relative flex font-oswald text-[110px] mb-5 ${mainTextColor}`}
        >
          {tempH}
          <span className="absolute text-5xl -right-4 top-5">°</span>
        </div>
        <div className="grid">
          <InfoContainer>
            <Precipitation />
            <span className="flex-1">{precipitation + "%"}</span>
          </InfoContainer>
          <InfoContainer>
            <Low />
            <span className="flex-1">{tempL + "°"}</span>
          </InfoContainer>
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
    tempH: 71,
    tempL: 28,
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
    tempH: 65,
    tempL: 30,
    precipitation: 99,
    bgColor: "bg-reviving-green",
    mainTextColor: "text-epimetheus",
    subTextColor: "text-devil-blue",
    offsetWeatherIcon: "",
  },
  {
    dayOfWeek: "Fri",
    date: 10,
    Weather: Stormy,
    tempH: 65,
    tempL: 45,
    precipitation: 100,
    bgColor: "bg-black-chasm",
    mainTextColor: "text-reviving-green",
    subTextColor: "text-freezing-vapor",
    offsetWeatherIcon: "absolute -left-4",
  },
  {
    dayOfWeek: "Sat",
    date: 11,
    Weather: Snowy,
    tempH: 22,
    tempL: -5,
    precipitation: 12,
    bgColor: "bg-diminished-blue",
    mainTextColor: "text-black-chasm",
    subTextColor: "text-devil-blue",
    offsetWeatherIcon: "absolute -left-6",
  },
  {
    dayOfWeek: "Sun",
    date: 12,
    Weather: PartlyCloudy,
    tempH: 57,
    tempL: 19,
    precipitation: 28,
    bgColor: "bg-epimetheus",
    mainTextColor: "text-reviving-green",
    subTextColor: "text-freezing-vapor",
    offsetWeatherIcon: "absolute -left-4",
  },
  {
    dayOfWeek: "Mon",
    date: 13,
    Weather: Rainy,
    tempH: 63,
    tempL: 35,
    precipitation: 100,
    bgColor: "bg-carol",
    mainTextColor: "text-reviving-green",
    subTextColor: "text-freezing-vapor",
    offsetWeatherIcon: "absolute left-7",
  },
  {
    dayOfWeek: "Tue",
    date: 14,
    Weather: Sunny,
    tempH: 71,
    tempL: 39,
    precipitation: 5,
    bgColor: "bg-reviving-green",
    mainTextColor: "text-epimetheus",
    subTextColor: "text-devil-blue",
    offsetWeatherIcon: "",
  },
];

export default App;
