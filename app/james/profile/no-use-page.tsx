// 'use client'

// import { useGameState } from '@/app/_context/app.context';
// import {
//   Observable,
//   ObservableComputed,
//   ObservablePrimitiveBaseFns,
// } from '@legendapp/state';
// import React from 'react';

// const ProfilePage = () => {
//   const { userName, faction, classType, expPoints, inGameTime, learningSpeed } =
//     useGameState();

//   const userDetails = [
//     { name: 'Faction', val: faction, suffix: '' },
//     { name: 'Class', val: classType, suffix: '' },
//     { name: 'Exp. Points', val: expPoints, suffix: 'pts' },
//     { name: 'In game time', val: inGameTime, suffix: 'hrs' },
//     { name: 'Learning speed', val: learningSpeed, suffix: 'pts/hr' },
//   ];

//   return (
//     <div className="flex-container flex-col font-body gap-10">
//       <h1 className="head-1">
//         Welcome, <span className='text-accent'>{userName}!</span>
//       </h1>
//       <ul className='flex flex-col gap-5'>
//         {userDetails.map((detail) => (
//           <UserDetail key={detail.name} detail={detail} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProfilePage;

// interface IUserDetail {
//   name: string;
//   val: Observable<string> | Observable<number> | ObservableComputed<number>;
//   suffix: string;
// }

// function UserDetail({ detail: { name, val, suffix } }: { detail: IUserDetail }) {
//   return (
//     <li className='font-body text-2xl'>
//       <span>{name}: {' '}</span>
//       <span className="text-brandAccent">{val}</span>
//       {suffix && <span className="text-brandAccent">{suffix}</span>}
//     </li>
//   );
// }
