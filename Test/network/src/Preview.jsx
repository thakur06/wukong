import React from "react";
import useNetworkStatus from "./useNetworkStatus";
import { IconContainer } from "./Container";
import { RiSignalWifiOffFill } from "react-icons/ri";
import { MdOutlineSignalWifiStatusbar4Bar } from "react-icons/md";
import { PiSpeedometerFill } from "react-icons/pi";
import { FaSignal } from "react-icons/fa";
import { TbSignal2G, TbSignal3G, TbSignal4G, TbSignal5G, TbSignalLte } from "react-icons/tb";
import { GiAerialSignal } from "react-icons/gi";


export const Preview = () => {
  const { online, measuredSpeed, measuredLatency, rtt, effectiveType, speedUnit } = useNetworkStatus();

  return (
    <div className="preview-container">
      {/* Icons in Arc */}
      <div className="icon-arc-container">
        <IconContainer text={`Speed ${measuredSpeed} ${speedUnit}`} icon={<PiSpeedometerFill className="h-8 w-8 text-slate-600" />} className="icon-container" />
        <IconContainer text={`Latency ${measuredLatency} ms`} icon={<GiAerialSignal className="h-8 w-8 text-slate-600" />} className="icon-container" />
        <IconContainer text={`RTT ${rtt} ms`} icon={<FaSignal className="h-8 w-8 text-slate-600" />} className="icon-container" />
        <IconContainer
         text={`Network Type ${effectiveType.toUpperCase()}`}
          icon={
            effectiveType === "5g" ? (
              <TbSignal5G className="h-8 w-8 text-slate-600" />
            ) : effectiveType === "4g" ? (
              <TbSignal4G className="h-8 w-8 text-slate-600" />
            ) : effectiveType === "3g" ? (
              <TbSignal3G className="h-8 w-8 text-slate-600" />
            ) : effectiveType === "2g" ? (
              <TbSignal2G className="h-8 w-8 text-slate-600" />
            ) : (
              <TbSignalLte className="h-8 w-8 text-slate-600" />
            )
          }
          className="icon-container"
        />
      </div>

      {/* Main Status */}
      <div className="flex justify-center items-center mt-4">
        {!online ? (
          <IconContainer text="OFFLINE" icon={<RiSignalWifiOffFill className="h-8 w-8 text-red-600" />} />
        ) : (
          <IconContainer text="ONLINE" icon={<MdOutlineSignalWifiStatusbar4Bar className="h-8 w-8 text-green-600" />} />
        )}
      </div>

      {/* Radar effect */}
      {/* <Radar className="absolute -bottom-12 radar-spin" /> */}
    </div>
  );
};
