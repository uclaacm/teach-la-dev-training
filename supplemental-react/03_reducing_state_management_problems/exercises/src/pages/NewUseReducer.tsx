import { setupMaster } from "cluster";
import React, { useReducer, useState } from "react";
import { setConstantValue } from "typescript";
import DataChart from "./DataChart";

interface HistogramSection {
  x: string;
  y: number;
  weight: number;
}

type Histogram = HistogramSection[];

interface HistogramSection {
  x: string;
  y: number;
  weight: number;
}

enum HistogramActionType {
  INCREMENT_ALL,
  INCREMENT_ONE,
  RESET,
}

interface HistogramAction {
  type: HistogramActionType;
  sectionName?: string;
}

const nums = [1, 2, 3, 4, 5];
const initialHistogram: Histogram = nums.map((num) => ({
  x: "Object " + num,
  y: 20 - 5 * (num - 1),
  weight: 0.2,
}));

export const newHistogramReducer = (
  prevHistogram: Histogram,
  action: HistogramAction
) => {
  switch (action.type) {
    case HistogramActionType.INCREMENT_ALL: {
      return prevHistogram.map((section: HistogramSection) => ({
        ...section,
        y: section.y + 1,
      }));
    }
    case HistogramActionType.INCREMENT_ONE: {
      const newHistogram = prevHistogram.map((section: HistogramSection) => {
        return { ...section };
      });

      for (let section of newHistogram) {
        if (section.x === action.sectionName) {
          section.y = section.y + 1;
        }
      }

      //sorting it
      newHistogram.sort((a, b) => b.y - a.y);
      return newHistogram;
    }

    case HistogramActionType.RESET: {
      const zeroHistogram = prevHistogram.map((section: HistogramSection) => ({
        ...section,
        y: 0,
      }));
      zeroHistogram.sort((a, b) => (a.x > b.x ? 1 : -1));
      return zeroHistogram;
    }

    default: {
      return prevHistogram;
    }
  }
};
