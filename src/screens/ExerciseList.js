import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';

const {width} = Dimensions.get('window');
const BANNER_IMG_WIDTH = width;
const BANNER_IMG_RATIO = BANNER_IMG_WIDTH / 1440;

const CARD_WIDTH = width / 2 - 10;
const CARD_RATIO = CARD_WIDTH / 360;

const data = {
  day1: [
    { source: "../data/day1/jumping-jacks.gif", duration: "00:20", title: "JUMPING" },
    { source: "../data/day1/squats.gif", duration: "00:30", title: "SQUATS" },
    { source: "../data/day1/circles-arm.gif", duration: "00:30", title: "Circles Arm" },
    { source: "../data/day1/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE SQUATS" },
    { source: "../data/day1/butt-bridge.gif", duration: "00:20", title: "BUTT BRIDGE" },
    { source: "../data/day1/side-step-jacks.gif", duration: "00:20", title: "JACKS" },
    { source: "../data/day1/donkey-kicks-right.gif", duration: "00:30", title: "DONKEY KICKS RIGHT" },
    { source: "../data/day1/donkey-kicks-left.gif", duration: "00:30", title: "DONKEY KICKS LEFT" }
  ],
  day2: [
    { source: "../data/day2/punches.gif", duration: "00:20", title: "PUNCHES" },
    { source: "../data/day2/cobras.gif", duration: "00:20", title: "COBRAS" },
    { source: "../data/day2/plank-leg-up.gif", duration: "00:20", title: "PLANK LEG UP" },
    { source: "../data/day2/standing-bicycle-crunches.gif", duration: "00:20", title: "STANDING BICYCLE CRUNCHES" },
    { source: "../data/day2/bulgarian-split-squat-left.gif", duration: "00:20", title: "BULGARIAN SPLIT SQUAT LEFT" },
    { source: "../data/day2/bulgarian-split-squat.gif", duration: "00:20", title: "BULGARIAN SPLIT SQUAT" }

  ],
  day3: [
    { source: "../data/day3/jumping-jacks.gif", duration: "00:20", title: "JUMPING JACKS" },
    { source: "../data/day3/squats.gif", duration: "00:30", title: "SQUATS" },
    { source: "../data/day3/bicycle-crunches.gif", duration: "00:20", title: "BICYCLE CRUNCHES" },
    { source: "../data/day3/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day3/cobras.gif", duration: "00:20", title: "COBRAS" },
    { source: "../data/day3/plank-leg-up.gif", duration: "00:20", title: "PLANK LEG UP" }
  ],
  day4: [
    { source: "../data/day4/punches.gif", duration: "00:20", title: "PUNCHES" },
    { source: "../data/day4/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day4/cobras.gif", duration: "00:20", title: "COBRAS" },
    { source: "../data/day4/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" }
  ],
  day5: [
    { source: "../data/day5/reverse-crunches.gif", duration: "00:20", title: "REVERSE CRUNCHES" },
    { source: "../data/day5/cat-cow-pose.gif", duration: "00:20", title: "CAT COW POSE" },
    { source: "../data/day5/plank-leg-up.gif", duration: "00:20", title: "PLANK LEG UP" },
    { source: "../data/day5/box-push-ups.gif", duration: "00:20", title: "BOX PUSH-UPS" },
    { source: "../data/day5/standing-side-crunch-elbow-left.gif", duration: "00:20", title: "STANDING SIDE CRUNCH ELBOW LEFT" },
    { source: "../data/day5/standing-side-crunch-elbow-right.gif", duration: "00:20", title: "STANDING SIDE CRUNCH ELBOW RIGHT" }
  ],
  day6: [
    { source: "../data/day6/cobras.gif", duration: "00:30", title: "COBRAS" },
{ source: "../data/day6/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
{ source: "../data/day6/standing-bicycle-crunches.gif", duration: "00:20", title: "STANDING BICYCLE CRUNCHES" },
{ source: "../data/day6/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
{ source: "../data/day6/side-lying-lift-left.gif", duration: "00:20", title: "SIDE LYING LEG LIFT LEFT" },
{ source: "../data/day6/side-lying-lift-right.gif", duration: "00:20", title: "SIDE LYING LEG LIFT RIGHT" }
  ],
  day7: [
    { source: "../data/day7/jumping-jacks.gif", duration: "00:20", title: "JUMPING JACKS" },
{ source: "../data/day7/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
{ source: "../data/day7/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
{ source: "../data/day7/butt-bridge.gif", duration: "00:30", title: "BUTT BRIDGE" },
{ source: "../data/day7/fire-hydrant-left.gif", duration: "00:20", title: "FIRE HYDRANT LEFT" },
{ source: "../data/day7/bulgarian-split-squat-left.gif", duration: "00:20", title: "BULGARIAN SPLIT SQUAT LEFT" },
{ source: "../data/day7/bulgarian-split-squat.gif", duration: "00:20", title: "BULGARIAN SPLIT SQUAT" },
{ source: "../data/day7/fire-hydrant-right.gif", duration: "00:20", title: "FIRE HYDRANT RIGHT" }
  ],
  day8: [
    { source: "../data/day8/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
{ source: "../data/day8/punches.gif", duration: "00:20", title: "PUNCHES" },
{ source: "../data/day8/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
{ source: "../data/day8/cobras.gif", duration: "00:30", title: "COBRAS" }
  ],
  day9: [
    { source: "../data/day9/jumping-jacks.gif", duration: "00:20", title: "JUMPING JACKS" },
    { source: "../data/day9/standing-bicycle-crunches.gif", duration: "00:30", title: "STANDING BICYCLE CRUNCHES" },
    { source: "../data/day9/punches.gif", duration: "00:20", title: "PUNCHES" },
    { source: "../data/day9/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
    { source: "../data/day9/bicycle-crunches.gif", duration: "00:20", title: "BICYCLE CRUNCHES" },
    { source: "../data/day9/box-push-ups.gif", duration: "00:20", title: "BOX PUSH-UPS" },
    { source: "../data/day9/cobras.gif", duration: "00:30", title: "COBRAS" }
  ],
  day10: [
    { source: "../data/day10/standing-bicycle-crunches.gif", duration: "00:30", title: "STANDING BICYCLE CRUNCHES" },
{ source: "../data/day10/squats.gif", duration: "00:30", title: "SQUATS" },
{ source: "../data/day10/punches.gif", duration: "00:30", title: "PUNCHES" },
{ source: "../data/day10/donkey-kicks-right.gif", duration: "00:20", title: "DONKEY KICKS RIGHT" },
{ source: "../data/day10/donkey-kicks-left.gif", duration: "00:20", title: "DONKEY KICKS LEFT" },
{ source: "../data/day10/cobras.gif", duration: "00:30", title: "COBRAS" }
  ],
  day11: [
    { source: "../data/day11/jumping-jacks.gif", duration: "00:20", title: "JUMPING JACKS" },
    { source: "../data/day11/lunges-rear.gif", duration: "00:30", title: "LUNGES" },
    { source: "../data/day11/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day11/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
    { source: "../data/day11/bicycle-crunches.gif", duration: "00:20", title: "BICYCLE CRUNCHES" },
    { source: "../data/day11/box-push-ups.gif", duration: "00:20", title: "BOX PUSH-UPS" },
    { source: "../data/day11/fire-hydrant-left.gif", duration: "00:20", title: "FIRE HYDRANT LEFT" },
    { source: "../data/day11/fire-hydrant-right.gif", duration: "00:20", title: "FIRE HYDRANT RIGHT" }    
  ],
  day12: [
    { source: "../data/day12/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
    { source: "../data/day12/punches.gif", duration: "00:20", title: "PUNCHES" },
    { source: "../data/day12/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day12/cobras.gif", duration: "00:30", title: "COBRAS" }
  ],
  day13: [
    { source: "../data/day13/standing-bicycle-crunches.gif", duration: "00:20", title: "STANDING BICYCLE CRUNCHES" },
{ source: "../data/day13/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
{ source: "../data/day13/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
{ source: "../data/day13/box-push-ups.gif", duration: "00:30", title: "BOX PUSH-UPS" },
{ source: "../data/day13/side-lying-lift-left.gif", duration: "00:20", title: "SIDE LYING LEG LIFT LEFT" },
{ source: "../data/day13/side-lying-lift-right.gif", duration: "00:20", title: "SIDE LYING LEG LIFT RIGHT" },
{ source: "../data/day13/cobras.gif", duration: "00:30", title: "COBRAS" }
  ],
  day14: [
    { source: "../data/day14/jumping-jacks.gif", duration: "00:20", title: "JUMPING JACKS" },
    { source: "../data/day14/bulgarian-split-squat-left.gif", duration: "00:20", title: "BULGARIAN SPLIT SQUAT LEFT" },
    { source: "../data/day14/bulgarian-split-squat.gif", duration: "00:20", title: "BULGARIAN SPLIT SQUAT" },
    { source: "../data/day14/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day14/plank-leg-up.gif", duration: "00:40", title: "PLANK LEG UP" },
    { source: "../data/day14/fire-hydrant-left.gif", duration: "00:30", title: "FIRE HYDRANT LEFT" },
    { source: "../data/day14/fire-hydrant-right.gif", duration: "00:30", title: "FIRE HYDRANT RIGHT" },
    { source: "../data/day14/butt-bridge.gif", duration: "00:30", title: "BUTT BRIDGE" }
  ],
  day15: [
    { source: "../data/day15/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
    { source: "../data/day15/punches.gif", duration: "00:30", title: "PUNCHES" },
    { source: "../data/day15/donkey-kicks-right.gif", duration: "00:20", title: "DONKEY KICKS RIGHT" },
    { source: "../data/day15/donkey-kicks-left.gif", duration: "00:20", title: "DONKEY KICKS LEFT" },
    { source: "../data/day15/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
    { source: "../data/day15/reverse-crunches.gif", duration: "00:30", title: "REVERSE CRUNCHES" },
    { source: "../data/day15/box-push-ups.gif", duration: "00:30", title: "BOX PUSH-UPS" }
  ],
  day16: [
    { source: "../data/day16/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
    { source: "../data/day16/punches.gif", duration: "00:30", title: "PUNCHES" },
    { source: "../data/day16/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day16/cobras.gif", duration: "00:30", title: "COBRAS" }
  ],
  day17: [
    { source: "../data/day17/jumping-jacks.gif", duration: "00:20", title: "JUMPING JACKS" },
    { source: "../data/day17/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day17/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
    { source: "../data/day17/bicycle-crunches.gif", duration: "00:20", title: "BICYCLE CRUNCHES" },
    { source: "../data/day17/box-push-ups.gif", duration: "00:30", title: "BOX PUSH-UPS" },
    { source: "../data/day17/fire-hydrant-left.gif", duration: "00:30", title: "FIRE HYDRANT LEFT" },
    { source: "../data/day17/fire-hydrant-right.gif", duration: "00:30", title: "FIRE HYDRANT RIGHT" }
  ],  
  day18: [
    { source: "../data/day18/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
    { source: "../data/day18/squats.gif", duration: "00:30", title: "SQUATS" },
    { source: "../data/day18/punches.gif", duration: "00:20", title: "PUNCHES" },
    { source: "../data/day18/donkey-kicks-right.gif", duration: "00:20", title: "DONKEY KICKS RIGHT" },
    { source: "../data/day18/donkey-kicks-left.gif", duration: "00:20", title: "DONKEY KICKS LEFT" },
    { source: "../data/day18/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
    { source: "../data/day18/butt-bridge.gif", duration: "00:30", title: "BUTT BRIDGE" },
    { source: "../data/day18/cobras.gif", duration: "00:30", title: "COBRAS" }
  ],
  day19: [
    { source: "../data/day19/standing-bicycle-crunches.gif", duration: "00:20", title: "STANDING BICYCLE CRUNCHES" },
    { source: "../data/day19/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
    { source: "../data/day19/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day19/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
    { source: "../data/day19/bicycle-crunches.gif", duration: "00:20", title: "BICYCLE CRUNCHES" },
    { source: "../data/day19/side-lying-lift-left.gif", duration: "00:20", title: "SIDE LYING LEG LIFT LEFT" },
    { source: "../data/day19/side-lying-lift-right.gif", duration: "00:20", title: "SIDE LYING LEG LIFT RIGHT" },
    { source: "../data/day19/cobras.gif", duration: "00:30", title: "COBRAS" }
  ],
  day20: [
    { source: "../data/day20/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
    { source: "../data/day20/punches.gif", duration: "00:20", title: "PUNCHES" },
    { source: "../data/day20/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day20/cobras.gif", duration: "00:30", title: "COBRAS" }
  ],
  day21: [
    { source: "../data/day21/jumping-jacks.gif", duration: "00:20", title: "JUMPING JACKS" },
    { source: "../data/day21/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
    { source: "../data/day21/punches.gif", duration: "00:20", title: "PUNCHES" },
    { source: "../data/day21/donkey-kicks-right.gif", duration: "00:20", title: "DONKEY KICKS RIGHT" },
    { source: "../data/day21/donkey-kicks-left.gif", duration: "00:20", title: "DONKEY KICKS LEFT" },
    { source: "../data/day21/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day21/reverse-crunches.gif", duration: "00:30", title: "REVERSE CRUNCHES" },
    { source: "../data/day21/box-push-ups.gif", duration: "00:30", title: "BOX PUSH-UPS" }
  ],
  day22: [
    { source: "../data/day22/jumping-jacks.gif", duration: "00:20", title: "JUMPING JACKS" },
    { source: "../data/day22/standing-side-crunch-elbow-left.gif", duration: "00:20", title: "STANDING SIDE CRUNCH ELBOW LEFT" },
    { source: "../data/day22/standing-side-crunch-elbow-right.gif", duration: "00:20", title: "STANDING SIDE CRUNCH ELBOW RIGHT" },
    { source: "../data/day22/squats.gif", duration: "00:30", title: "SQUATS" },
    { source: "../data/day22/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day22/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
    { source: "../data/day22/bicycle-crunches.gif", duration: "00:20", title: "BICYCLE CRUNCHES" },
    { source: "../data/day22/box-push-ups.gif", duration: "00:30", title: "BOX PUSH-UPS" },
    { source: "../data/day22/fire-hydrant-left.gif", duration: "00:30", title: "FIRE HYDRANT LEFT" },
    { source: "../data/day22/fire-hydrant-right.gif", duration: "00:30", title: "FIRE HYDRANT RIGHT" },
    { source: "../data/day22/butt-bridge.gif", duration: "00:30", title: "BUTT BRIDGE" },
    { source: "../data/day22/cobras.gif", duration: "00:30", title: "COBRAS" }
  ],
  day23: [
    { source: "../data/day23/standing-bicycle-crunches.gif", duration: "00:20", title: "STANDING BICYCLE CRUNCHES" },
    { source: "../data/day23/standing-side-crunch-elbow-left.gif", duration: "00:20", title: "STANDING SIDE CRUNCH ELBOW LEFT" },
    { source: "../data/day23/standing-side-crunch-elbow-right.gif", duration: "00:20", title: "STANDING SIDE CRUNCH ELBOW RIGHT" },
    { source: "../data/day23/punches.gif", duration: "00:20", title: "PUNCHES" },
    { source: "../data/day23/donkey-kicks-right.gif", duration: "00:20", title: "DONKEY KICKS RIGHT" },
    { source: "../data/day23/donkey-kicks-left.gif", duration: "00:20", title: "DONKEY KICKS LEFT" },
    { source: "../data/day23/plank-leg-up.gif", duration: "00:30", title: "PLANK LEG UP" },
    { source: "../data/day23/fire-hydrant-left.gif", duration: "00:30", title: "FIRE HYDRANT LEFT" },
    { source: "../data/day23/fire-hydrant-right.gif", duration: "00:30", title: "FIRE HYDRANT RIGHT" },
    { source: "../data/day23/side-lying-lift-left.gif", duration: "00:20", title: "SIDE LYING LEG LIFT LEFT" },
    { source: "../data/day23/side-lying-lift-right.gif", duration: "00:20", title: "SIDE LYING LEG LIFT RIGHT" }
  ],
  day24: [
    { source: "../data/day24/side-step-jacks.gif", duration: "00:30", title: "SIDE STEP JACKS" },
    { source: "../data/day24/punches.gif", duration: "00:20", title: "PUNCHES" },
    { source: "../data/day24/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day24/cobras.gif", duration: "00:30", title: "COBRAS" },
    { source: "../data/day24/circles-arm.gif", duration: "00:30", title: "CLOCKWISE ARM SWINGS" }    
  ],
  day25: [
    { source: "../data/day25/jumping-jacks.gif", duration: "00:20", title: "JUMPING JACKS" },
    { source: "../data/day25/standing-side-crunch-elbow-left.gif", duration: "00:20", title: "STANDING SIDE CRUNCH ELBOW LEFT" },
    { source: "../data/day25/standing-side-crunch-elbow-right.gif", duration: "00:20", title: "STANDING SIDE CRUNCH ELBOW RIGHT" },
    { source: "../data/day25/bulgarian-split-squat-left.gif", duration: "00:30", title: "BULGARIAN SPLIT SQUAT LEFT" },
    { source: "../data/day25/bulgarian-split-squat.gif", duration: "00:20", title: "BULGARIAN SPLIT SQUAT" },
    { source: "../data/day25/punches.gif", duration: "00:30", title: "PUNCHES" },
    { source: "../data/day25/cat-cow-pose.gif", duration: "00:30", title: "CAT COW POSE" },
    { source: "../data/day25/plank-leg-up.gif", duration: "00:20", title: "PLANK LEG UP" },
    { source: "../data/day25/bicycle-crunches.gif", duration: "00:20", title: "BICYCLE CRUNCHES" },
    { source: "../data/day25/box-push-ups.gif", duration: "00:30", title: "BOX PUSH-UPS" },
    { source: "../data/day25/fire-hydrant-left.gif", duration: "00:20", title: "FIRE HYDRANT LEFT" },
    { source: "../data/day25/fire-hydrant-right.gif", duration: "00:30", title: "FIRE HYDRANT RIGHT" },
    { source: "../data/day25/cobras.gif", duration: "00:30", title: "COBRAS" }

  ],
  day26: [
    {source: '../data/day26/jumping-jacks.gif', duration: '00:20', title: 'JUMPING JACKS'},
    {source: '../data/day26/standing-side-crunch-elbow-left.gif', duration: '00:20', title: 'STANDING SIDE CRUNCH ELBOW LEFT'},
    {source: '../data/day26/standing-side-crunch-elbow-right.gif', duration: '00:20', title: 'STANDING SIDE CRUNCH ELBOW RIGHT'},
    {source: '../data/day26/side-step-jacks.gif', duration: '00:30', title: 'SIDE STEP JACKS'},
    {source: '../data/day26/squats.gif', duration: '00:30', title: 'SQUATS'},
    {source: '../data/day26/lunges-rear.gif', duration: '00:30', title: 'LUNGES'},
    {source: '../data/day26/donkey-kicks-right.gif', duration: '00:20', title: 'DONKEY KICKS RIGHT'},
    {source: '../data/day26/donkey-kicks-left.gif', duration: '00:20', title: 'DONKEY KICKS LEFT'},
    {source: '../data/day26/plank-leg-up.gif', duration: '00:20', title: 'PLANK LEG UP'},
    {source: '../data/day26/standing-bicycle-crunches.gif', duration: '00:20', title: 'STANDING BICYCLE CRUNCHES'},
    {source: '../data/day26/butt-bridge.gif', duration: '00:30', title: 'BUTT BRIDGE'},
    {source: '../data/day26/cobras.gif', duration: '00:20', title: 'COBRAS'},
  ],
  day27: [
    {source: '../data/day27/standing-bicycle-crunches.gif', duration: '00:20', title: 'STANDING BICYCLE CRUNCHES'},
    {source: '../data/day27/standing-side-crunch-elbow-left.gif', duration: '00:20', title: 'STANDING SIDE CRUNCH ELBOW LEFT'},
    {source: '../data/day27/standing-side-crunch-elbow-right.gif', duration: '00:20', title: 'STANDING SIDE CRUNCH ELBOW RIGHT'},
    {source: '../data/day27/side-step-jacks.gif', duration: '00:30', title: 'SIDE STEP JACKS'},
    {source: '../data/day27/bulgarian-split-squat-left.gif', duration: '00:20', title: 'BULGARIAN SPLIT SQUAT LEFT'},
    {source: '../data/day27/bulgarian-split-squat.gif', title: 'BULGARIAN SPLIT SQUAT', duration: '00:20'},
    {source: '../data/day27/punches.gif', duration: '00:20', title: 'PUNCHES'},
    {source: '../data/day27/cat-cow-pose.gif', duration: '00:30', title: 'CAT COW POSE'},
    {source: '../data/day27/plank-leg-up.gif', duration: '00:20', title: 'PLANK LEG UP'},
    {source: '../data/day27/bicycle-crunches.gif', duration: '00:20', title: 'BICYCLE CRUNCHES'},
    {source: '../data/day27/side-lying-lift-left.gif', duration: '00:20', title: 'SIDE LYING LEG LIFT LEFT'},
    {source: '../data/day27/side-lying-lift-right.gif', duration: '00:20', title: 'SIDE LYING LEG LIFT RIGHT'},
    {source: '../data/day27/cobras.gif', duration: '00:20', title: 'COBRAS'},
  ],
  day28: [
    {source: '../data/day28/jumping-jacks.gif', duration: '00:20', title: 'JUMPING JACKS'},
    {source: '../data/day28/standing-side-crunch-elbow-left.gif', duration: '00:20', title: 'STANDING SIDE CRUNCH ELBOW LEFT'},
    {source: '../data/day28/standing-side-crunch-elbow-right.gif', duration: '00:20', title: 'STANDING SIDE CRUNCH ELBOW RIGHT'},
    {source: '../data/day28/donkey-kicks-right.gif', duration: '00:20', title: 'DONKEY KICKS RIGHT'},
    {source: '../data/day28/donkey-kicks-left.gif', duration: '00:20', title: 'DONKEY KICKS LEFT'},
    {source: '../data/day28/cat-cow-pose.gif', duration: '00:30', title: 'CAT COW POSE'},
    {source: '../data/day28/plank-leg-up.gif', duration: '00:20', title: 'PLANK LEG UP'},
    {source: '../data/day28/bicycle-crunches.gif', duration: '00:20', title: 'BICYCLE CRUNCHES'},
    {source: '../data/day28/box-push-ups.gif', duration: '00:20', title: 'BOX PUSH-UPS'},
    {source: '../data/day28/fire-hydrant-left.gif', duration: '00:30', title: 'FIRE HYDRANT LEFT'},
    {source: '../data/day28/fire-hydrant-right.gif', duration: '00:30', title: 'FIRE HYDRANT RIGHT'},
    {source: '../data/day28/butt-bridge.gif', duration: '00:30', title: 'BUTT BRIDGE'},
    {source: '../data/day28/cobras.gif', duration: '00:20', title: 'COBRAS'},
  ],
  fullbody: [
    { source: '../data/fullbody/bridge', duration: '00:20', title: 'BRIDGE' },
    { source: '../data/fullbody/reverse-crunches.gif', duration: '00:20', title: 'REVERSE CRUNCHES' },
    { source: '../data/fullbody/butt-bridge.gif', duration: '00:30', title: 'BUTT BRIDGE' },
    { source: '../data/fullbody/bird-dog.gif', duration: '00:20', title: 'BIRD DOG' },
    { source: '../data/fullbody/plank.gif', duration: '00:30', title: 'PLANK' },
    { source: '../data/fullbody/cobras.gif', duration: '00:30', title: 'COBRAS' },
    { source: '../data/fullbody/shoulder-stretch.gif', duration: '00:30', title: 'SHOULDER STRETCH' },
    { source: '../data/fullbody/jumping-jacks.gif', duration: '00:20', title: 'JUMPING JACKS' }
  ],
  buttleg: [
    { source: '../data/buttleg/jumping-jacks.gif', duration: '00:30', title: 'JUMPING JACKS' },
    { source: '../data/buttleg/plank-jacks.gif', duration: '00:30', title: 'PLANK JACKS' },
    { source: '../data/buttleg/bulgarian-split-squat-left.gif', duration: '00:20', title: 'BULGARIAN SPLIT SQUAT LEFT' },
    { source: '../data/buttleg/bulgarian-split-squat.gif', duration: '00:20', title: 'BULGARIAN SPLIT SQUAT' },
    { source: '../data/buttleg/fire-hydrant-left.gif', duration: '00:30', title: 'FIRE HYDRANT LEFT' },
    { source: '../data/buttleg/fire-hydrant-right.gif', duration: '00:20', title: 'FIRE HYDRANT RIGHT' },
    { source: '../data/buttleg/seated-in-and-outs.gif', duration: '00:30', title: 'ROUNDHOUSE SQUAT KICKS' },
    { source: '../data/buttleg/donkey-kicks-right.gif', duration: '00:20', title: 'DONKEY KICKS RIGHT' },
    { source: '../data/buttleg/donkey-kicks-left.gif', duration: '00:20', title: 'DONKEY KICKS LEFT' },
    { source: '../data/buttleg/supine-hamstring-stretch-right.gif', duration: '00:20', title: 'SUPINE HAMSTRING STRETCH RIGHT' },
    { source: '../data/buttleg/supine-hamstring-stretch-left.gif', duration: '00:20', title: 'SUPINE HAMSTRING STRETCH LEFT' },
    { source: '../data/buttleg/knees-to-chest-right.gif', duration: '00:30', title: 'KNEES TO CHEST RIGHT' },
    { source: '../data/buttleg/knees-to-chest-left.gif', duration: '00:30', title: 'KNEES TO CHEST LEFT' },
    { source: '../data/buttleg/plank-jacks.gif', duration: '00:30', title: 'PLANK JACKS' },
    { source: '../data/buttleg/mountain-climber.gif', duration: '00:30', title: 'MOUNTAIN CLIMBER' },
  ],
  arms: [
    { source: '../data/arms/clockwise-arm-swings.gif', duration: '00:30', title: 'CLOCKWISE ARM SWINGS' },
    { source: '../data/arms/circles-arm.gif', duration: '00:30', title: 'COUNTER CLOCKWISE ARM SWINGS' },
    { source: '../data/arms/standing-alternate.gif', duration: '00:30', title: 'STANDING ALTERNATE' },
    { source: '../data/arms/knee-push-ups.gif', duration: '00:30', title: 'KNEE PUSH-UPS' },
    { source: '../data/arms/triceps-stretch-left-b.gif', duration: '00:30', title: 'TRICEPS STRETCH LEFT' },
    { source: '../data/arms/triceps-stretch-right-b.gif', duration: '00:30', title: 'TRICEPS STRETCH RIGHT' },
    { source: '../data/arms/elbows-back.gif', duration: '00:30', title: 'ELBOWS BACK' },
    { source: '../data/arms/plank-taps.gif', duration: '00:30', title: 'PLANK TAPS' },
    { source: '../data/arms/plank-and-reach.gif', duration: '00:30', title: 'PLANK AND REACH' },
    { source: '../data/arms/arm-scissors.gif', duration: '00:30', title: 'ARM SCISSORS' },
    { source: '../data/arms/wall-push-ups.gif', duration: '00:30', title: 'WALL PUSH-UPS' }
  ]
};

const ExerciseList = ({navigation}) => {
  const route = useRoute();
  const [day, setday] = useState(route.params?.day);
  const [resource, setresource] = useState([]);
  const [jsx, setjsx] = useState(<></>);
  const [selectedindex, setselectedindex] = useState(null);

  useEffect(() => {
    switch (day) {
      case 'day1':
        setresource(data.day1);
        break;
      case 'day2':
        setresource(data.day2);
        break;
      case 'day3':
        setresource(data.day3);
        break;
      case 'day4':
        setresource(data.day4);
        break;
      case 'day5':
        setresource(data.day5);
        break;
      case 'day6':
        setresource(data.day6);
        break;
      case 'day7':
        setresource(data.day7);
        break;
      default:
        return;
        break;
    }
  }, [day]);

  useEffect(() => {
    exercise_data(resource);
  }, [resource]);

  const exercise_data = data => {
    if (data.length > 0) {
      let jsx = data.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => setselectedindex(index)}>
            <Image style={styles.card} source={item} />
          </TouchableOpacity>
        );
      });
      setjsx(jsx);
      return jsx;
    } else {
      return <></>;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF3F5'}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (selectedindex != null) {
              setselectedindex(null);
            } else {
              navigation.navigate('StartScreen');
            }
          }}>
          <Image
            style={styles.backbtn}
            source={require('../assets/boarding/back.png')}
          />
        </TouchableOpacity>
      </View>

      {selectedindex != null ? (
        <>
          <View style={styles.gifContainer}>
            <FastImage
              source={resource[selectedindex]}
              style={styles.FastImage}
              resizeMode={FastImage.resizeMode.contain}
            /> 
            <Text style={[styles.heading, {width: width * 0.50, textAlign: 'center', marginVertical: 15, lineHeight: 24}]}>Bulgarian Split Squat Left</Text>
          </View>
        </>
      ) : (
        <>
          <ImageBackground
            style={styles.bannerImg}
            source={require('../assets/images/exercise_banner.png')}>
            <Text style={styles.day}>{day}</Text>
          </ImageBackground>

          <View style={{width: width, padding: 19, flex: 2}}>
            <Text style={styles.heading}>Exercises</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.container}>{jsx}</View>
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: width,
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backbtn: {
    width: 24,
    height: 24,
  },
  btn: {
    padding: 10,
  },
  bannerImg: {
    width: BANNER_IMG_WIDTH,
    height: 724 * BANNER_IMG_RATIO,
    paddingHorizontal: 15,
  },
  day: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3D3234',
    textTransform: 'capitalize',
    position: 'absolute',
    top: '30%',
    left: '6%',
  },
  heading: {
    fontWeight: '900',
    color: '#3D3234',
    fontSize: 17,
    marginBottom: 10,
  },
  container: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: CARD_WIDTH,
    height: 360 * CARD_RATIO,
    marginBottom: 15,
    borderRadius: 10,
  },
  gifContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FastImage: {
    width: width - 20,
    height : 360 * (width - 20)/360,
    alignSelf: 'center',
  }
});
export default ExerciseList;
