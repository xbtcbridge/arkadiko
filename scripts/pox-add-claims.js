require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(2480), 'usda': tx.uintCV(59308201) }),
    tx.tupleCV({ 'to': tx.uintCV(2483), 'usda': tx.uintCV(102524) }),
    tx.tupleCV({ 'to': tx.uintCV(2485), 'usda': tx.uintCV(152351045) }),
    tx.tupleCV({ 'to': tx.uintCV(2486), 'usda': tx.uintCV(3485825) }),
    tx.tupleCV({ 'to': tx.uintCV(2495), 'usda': tx.uintCV(2942446) }),
    tx.tupleCV({ 'to': tx.uintCV(2511), 'usda': tx.uintCV(6705086) }),
    tx.tupleCV({ 'to': tx.uintCV(2518), 'usda': tx.uintCV(20505) }),
    tx.tupleCV({ 'to': tx.uintCV(2526), 'usda': tx.uintCV(20504851) }),
    tx.tupleCV({ 'to': tx.uintCV(2527), 'usda': tx.uintCV(225553) }),
    tx.tupleCV({ 'to': tx.uintCV(2532), 'usda': tx.uintCV(328078) }),
    tx.tupleCV({ 'to': tx.uintCV(2533), 'usda': tx.uintCV(12393132) }),
    tx.tupleCV({ 'to': tx.uintCV(2534), 'usda': tx.uintCV(23320) }),
    tx.tupleCV({ 'to': tx.uintCV(2535), 'usda': tx.uintCV(20505) }),
    tx.tupleCV({ 'to': tx.uintCV(2536), 'usda': tx.uintCV(656155) }),
    tx.tupleCV({ 'to': tx.uintCV(2540), 'usda': tx.uintCV(14984) }),
    tx.tupleCV({ 'to': tx.uintCV(2541), 'usda': tx.uintCV(24958) }),
    tx.tupleCV({ 'to': tx.uintCV(2542), 'usda': tx.uintCV(144887279) }),
    tx.tupleCV({ 'to': tx.uintCV(2544), 'usda': tx.uintCV(82019) }),
    tx.tupleCV({ 'to': tx.uintCV(2545), 'usda': tx.uintCV(6151455) }),
    tx.tupleCV({ 'to': tx.uintCV(2546), 'usda': tx.uintCV(9780814) }),
    tx.tupleCV({ 'to': tx.uintCV(2547), 'usda': tx.uintCV(102524) }),
    tx.tupleCV({ 'to': tx.uintCV(2548), 'usda': tx.uintCV(102524) }),
    tx.tupleCV({ 'to': tx.uintCV(2549), 'usda': tx.uintCV(24368620) }),
    tx.tupleCV({ 'to': tx.uintCV(2551), 'usda': tx.uintCV(1714206) }),
    tx.tupleCV({ 'to': tx.uintCV(2552), 'usda': tx.uintCV(60442) }),
    tx.tupleCV({ 'to': tx.uintCV(2555), 'usda': tx.uintCV(957647) }),
    tx.tupleCV({ 'to': tx.uintCV(2556), 'usda': tx.uintCV(348582) }),
    tx.tupleCV({ 'to': tx.uintCV(2557), 'usda': tx.uintCV(3075728) }),
    tx.tupleCV({ 'to': tx.uintCV(2558), 'usda': tx.uintCV(12302911) }),
    tx.tupleCV({ 'to': tx.uintCV(2560), 'usda': tx.uintCV(10252426) }),
    tx.tupleCV({ 'to': tx.uintCV(2562), 'usda': tx.uintCV(3147495) }),
    tx.tupleCV({ 'to': tx.uintCV(2564), 'usda': tx.uintCV(3604376) }),
    tx.tupleCV({ 'to': tx.uintCV(2565), 'usda': tx.uintCV(410097) }),
    tx.tupleCV({ 'to': tx.uintCV(2566), 'usda': tx.uintCV(9186173) }),
    tx.tupleCV({ 'to': tx.uintCV(2567), 'usda': tx.uintCV(2050485) }),
    tx.tupleCV({ 'to': tx.uintCV(2568), 'usda': tx.uintCV(51262) }),
    tx.tupleCV({ 'to': tx.uintCV(2570), 'usda': tx.uintCV(6151) }),
    tx.tupleCV({ 'to': tx.uintCV(2571), 'usda': tx.uintCV(4101) }),
    tx.tupleCV({ 'to': tx.uintCV(2572), 'usda': tx.uintCV(1625472) }),
    tx.tupleCV({ 'to': tx.uintCV(2573), 'usda': tx.uintCV(30757277) }),
    tx.tupleCV({ 'to': tx.uintCV(2574), 'usda': tx.uintCV(38959217) }),
    tx.tupleCV({ 'to': tx.uintCV(2575), 'usda': tx.uintCV(61924651) }),
    tx.tupleCV({ 'to': tx.uintCV(2576), 'usda': tx.uintCV(870653) }),
    tx.tupleCV({ 'to': tx.uintCV(2577), 'usda': tx.uintCV(1025243) }),
    tx.tupleCV({ 'to': tx.uintCV(2579), 'usda': tx.uintCV(143534) }),
    tx.tupleCV({ 'to': tx.uintCV(2580), 'usda': tx.uintCV(176342) }),
    tx.tupleCV({ 'to': tx.uintCV(2581), 'usda': tx.uintCV(41010) }),
    tx.tupleCV({ 'to': tx.uintCV(2582), 'usda': tx.uintCV(410857) }),
    tx.tupleCV({ 'to': tx.uintCV(2584), 'usda': tx.uintCV(4426997) }),
    tx.tupleCV({ 'to': tx.uintCV(2585), 'usda': tx.uintCV(840699) }),
    tx.tupleCV({ 'to': tx.uintCV(2586), 'usda': tx.uintCV(119909) }),
    tx.tupleCV({ 'to': tx.uintCV(2587), 'usda': tx.uintCV(92271831) }),
    tx.tupleCV({ 'to': tx.uintCV(2588), 'usda': tx.uintCV(41010) }),
    tx.tupleCV({ 'to': tx.uintCV(2589), 'usda': tx.uintCV(282967) }),
    tx.tupleCV({ 'to': tx.uintCV(2590), 'usda': tx.uintCV(2870679) }),
    tx.tupleCV({ 'to': tx.uintCV(2591), 'usda': tx.uintCV(410097) }),
    tx.tupleCV({ 'to': tx.uintCV(2594), 'usda': tx.uintCV(61515) }),
    tx.tupleCV({ 'to': tx.uintCV(2596), 'usda': tx.uintCV(47571255) }),
    tx.tupleCV({ 'to': tx.uintCV(2597), 'usda': tx.uintCV(68281155) }),
    tx.tupleCV({ 'to': tx.uintCV(2598), 'usda': tx.uintCV(82019) }),
    tx.tupleCV({ 'to': tx.uintCV(2599), 'usda': tx.uintCV(31372422) }),
    tx.tupleCV({ 'to': tx.uintCV(2600), 'usda': tx.uintCV(2050485) }),
    tx.tupleCV({ 'to': tx.uintCV(2602), 'usda': tx.uintCV(5126) }),
    tx.tupleCV({ 'to': tx.uintCV(2603), 'usda': tx.uintCV(11482717) }),
    tx.tupleCV({ 'to': tx.uintCV(2604), 'usda': tx.uintCV(205049) }),
    tx.tupleCV({ 'to': tx.uintCV(2605), 'usda': tx.uintCV(102524256) }),
    tx.tupleCV({ 'to': tx.uintCV(2606), 'usda': tx.uintCV(205049) }),
    tx.tupleCV({ 'to': tx.uintCV(2607), 'usda': tx.uintCV(205049) }),
    tx.tupleCV({ 'to': tx.uintCV(2608), 'usda': tx.uintCV(67666009) }),
    tx.tupleCV({ 'to': tx.uintCV(2609), 'usda': tx.uintCV(615146) }),
    tx.tupleCV({ 'to': tx.uintCV(2610), 'usda': tx.uintCV(11995338) }),
    tx.tupleCV({ 'to': tx.uintCV(2611), 'usda': tx.uintCV(497166) }),
    tx.tupleCV({ 'to': tx.uintCV(2612), 'usda': tx.uintCV(410097) }),
    tx.tupleCV({ 'to': tx.uintCV(2613), 'usda': tx.uintCV(59464069) }),
    tx.tupleCV({ 'to': tx.uintCV(2614), 'usda': tx.uintCV(90221) }),
    tx.tupleCV({ 'to': tx.uintCV(2615), 'usda': tx.uintCV(30552228) }),
    tx.tupleCV({ 'to': tx.uintCV(2616), 'usda': tx.uintCV(533126) }),
    tx.tupleCV({ 'to': tx.uintCV(2617), 'usda': tx.uintCV(194796) }),
    tx.tupleCV({ 'to': tx.uintCV(2618), 'usda': tx.uintCV(205049) }),
    tx.tupleCV({ 'to': tx.uintCV(2620), 'usda': tx.uintCV(6151) }),
    tx.tupleCV({ 'to': tx.uintCV(2621), 'usda': tx.uintCV(26656307) }),
    tx.tupleCV({ 'to': tx.uintCV(2622), 'usda': tx.uintCV(41009702) }),
    tx.tupleCV({ 'to': tx.uintCV(2623), 'usda': tx.uintCV(20504851) }),
    tx.tupleCV({ 'to': tx.uintCV(2624), 'usda': tx.uintCV(10252) }),
    tx.tupleCV({ 'to': tx.uintCV(2626), 'usda': tx.uintCV(12097862) }),
    tx.tupleCV({ 'to': tx.uintCV(2627), 'usda': tx.uintCV(1780828) }),
    tx.tupleCV({ 'to': tx.uintCV(2628), 'usda': tx.uintCV(25426016) }),
    tx.tupleCV({ 'to': tx.uintCV(2629), 'usda': tx.uintCV(82429502) }),
    tx.tupleCV({ 'to': tx.uintCV(2630), 'usda': tx.uintCV(123029) }),
    tx.tupleCV({ 'to': tx.uintCV(2632), 'usda': tx.uintCV(40394557) }),
    tx.tupleCV({ 'to': tx.uintCV(2633), 'usda': tx.uintCV(2050485) }),
    tx.tupleCV({ 'to': tx.uintCV(2634), 'usda': tx.uintCV(4100970) }),
    tx.tupleCV({ 'to': tx.uintCV(2636), 'usda': tx.uintCV(10252) }),
    tx.tupleCV({ 'to': tx.uintCV(2637), 'usda': tx.uintCV(215301) }),
    tx.tupleCV({ 'to': tx.uintCV(2638), 'usda': tx.uintCV(8573078) }),
    tx.tupleCV({ 'to': tx.uintCV(2639), 'usda': tx.uintCV(8043869) }),
    tx.tupleCV({ 'to': tx.uintCV(2640), 'usda': tx.uintCV(20094754) }),
    tx.tupleCV({ 'to': tx.uintCV(2641), 'usda': tx.uintCV(224749) }),
    tx.tupleCV({ 'to': tx.uintCV(2642), 'usda': tx.uintCV(9770562) }),
    tx.tupleCV({ 'to': tx.uintCV(2644), 'usda': tx.uintCV(17531648) }),
    tx.tupleCV({ 'to': tx.uintCV(2645), 'usda': tx.uintCV(1648534) }),
    tx.tupleCV({ 'to': tx.uintCV(2646), 'usda': tx.uintCV(102524) }),
    tx.tupleCV({ 'to': tx.uintCV(2647), 'usda': tx.uintCV(4306019) }),
    tx.tupleCV({ 'to': tx.uintCV(2648), 'usda': tx.uintCV(1025243) }),
    tx.tupleCV({ 'to': tx.uintCV(2649), 'usda': tx.uintCV(211091) }),
    tx.tupleCV({ 'to': tx.uintCV(2650), 'usda': tx.uintCV(2050485) }),
    tx.tupleCV({ 'to': tx.uintCV(2652), 'usda': tx.uintCV(205049) }),
    tx.tupleCV({ 'to': tx.uintCV(2653), 'usda': tx.uintCV(17429124) }),
    tx.tupleCV({ 'to': tx.uintCV(2654), 'usda': tx.uintCV(585440) }),
    tx.tupleCV({ 'to': tx.uintCV(2655), 'usda': tx.uintCV(32808) }),
    tx.tupleCV({ 'to': tx.uintCV(2656), 'usda': tx.uintCV(205049) }),
    tx.tupleCV({ 'to': tx.uintCV(2657), 'usda': tx.uintCV(7166851) }),
    tx.tupleCV({ 'to': tx.uintCV(2658), 'usda': tx.uintCV(10252) }),
    tx.tupleCV({ 'to': tx.uintCV(2660), 'usda': tx.uintCV(307573) }),
    tx.tupleCV({ 'to': tx.uintCV(2661), 'usda': tx.uintCV(16404) }),
    tx.tupleCV({ 'to': tx.uintCV(2662), 'usda': tx.uintCV(102524) }),
    tx.tupleCV({ 'to': tx.uintCV(2663), 'usda': tx.uintCV(202998) }),
    tx.tupleCV({ 'to': tx.uintCV(2664), 'usda': tx.uintCV(410097) }),
    tx.tupleCV({ 'to': tx.uintCV(2665), 'usda': tx.uintCV(307573) }),
    tx.tupleCV({ 'to': tx.uintCV(2666), 'usda': tx.uintCV(33422908) }),
    tx.tupleCV({ 'to': tx.uintCV(2669), 'usda': tx.uintCV(30757) }),
    tx.tupleCV({ 'to': tx.uintCV(2670), 'usda': tx.uintCV(41010) }),
    tx.tupleCV({ 'to': tx.uintCV(2672), 'usda': tx.uintCV(2255534) }),
    tx.tupleCV({ 'to': tx.uintCV(2673), 'usda': tx.uintCV(15600) }),
    tx.tupleCV({ 'to': tx.uintCV(2674), 'usda': tx.uintCV(205049) }),
    tx.tupleCV({ 'to': tx.uintCV(2675), 'usda': tx.uintCV(410097) }),
    tx.tupleCV({ 'to': tx.uintCV(2676), 'usda': tx.uintCV(266563) }),
    tx.tupleCV({ 'to': tx.uintCV(2677), 'usda': tx.uintCV(46135915) }),
    tx.tupleCV({ 'to': tx.uintCV(2678), 'usda': tx.uintCV(10252) }),
    tx.tupleCV({ 'to': tx.uintCV(2679), 'usda': tx.uintCV(102524) }),
    tx.tupleCV({ 'to': tx.uintCV(2680), 'usda': tx.uintCV(1517359) }),
    tx.tupleCV({ 'to': tx.uintCV(2681), 'usda': tx.uintCV(188645) }),
    tx.tupleCV({ 'to': tx.uintCV(2682), 'usda': tx.uintCV(51262) }),
    tx.tupleCV({ 'to': tx.uintCV(2683), 'usda': tx.uintCV(12303) }),
    tx.tupleCV({ 'to': tx.uintCV(2684), 'usda': tx.uintCV(71767) }),
    tx.tupleCV({ 'to': tx.uintCV(2685), 'usda': tx.uintCV(20505) }),
    tx.tupleCV({ 'to': tx.uintCV(2686), 'usda': tx.uintCV(492116) }),
    tx.tupleCV({ 'to': tx.uintCV(2687), 'usda': tx.uintCV(410097) }),
    tx.tupleCV({ 'to': tx.uintCV(2688), 'usda': tx.uintCV(10252426) }),
    tx.tupleCV({ 'to': tx.uintCV(2689), 'usda': tx.uintCV(7978075) }),
    tx.tupleCV({ 'to': tx.uintCV(2690), 'usda': tx.uintCV(89590) }),
    tx.tupleCV({ 'to': tx.uintCV(2691), 'usda': tx.uintCV(5126213) }),
    tx.tupleCV({ 'to': tx.uintCV(2692), 'usda': tx.uintCV(5122112) }),
    tx.tupleCV({ 'to': tx.uintCV(2693), 'usda': tx.uintCV(4100970) }),
    tx.tupleCV({ 'to': tx.uintCV(2694), 'usda': tx.uintCV(9227183) }),
    tx.tupleCV({ 'to': tx.uintCV(2695), 'usda': tx.uintCV(6151455) }),
    tx.tupleCV({ 'to': tx.uintCV(2696), 'usda': tx.uintCV(4193242) }),
    tx.tupleCV({ 'to': tx.uintCV(2697), 'usda': tx.uintCV(41010) }),
    tx.tupleCV({ 'to': tx.uintCV(2698), 'usda': tx.uintCV(205049) }),
    tx.tupleCV({ 'to': tx.uintCV(2699), 'usda': tx.uintCV(656155) }),
    tx.tupleCV({ 'to': tx.uintCV(2700), 'usda': tx.uintCV(7176698) }),
    tx.tupleCV({ 'to': tx.uintCV(2701), 'usda': tx.uintCV(6151) }),
    tx.tupleCV({ 'to': tx.uintCV(2702), 'usda': tx.uintCV(2050485) }),
    tx.tupleCV({ 'to': tx.uintCV(2703), 'usda': tx.uintCV(28706792) }),
    tx.tupleCV({ 'to': tx.uintCV(2704), 'usda': tx.uintCV(1553707) }),
    tx.tupleCV({ 'to': tx.uintCV(2705), 'usda': tx.uintCV(65616) }),
    tx.tupleCV({ 'to': tx.uintCV(2708), 'usda': tx.uintCV(3473675) }),
    tx.tupleCV({ 'to': tx.uintCV(2709), 'usda': tx.uintCV(40599605) }),
    tx.tupleCV({ 'to': tx.uintCV(2710), 'usda': tx.uintCV(266563) }),
    tx.tupleCV({ 'to': tx.uintCV(2712), 'usda': tx.uintCV(123029) }),
    tx.tupleCV({ 'to': tx.uintCV(2713), 'usda': tx.uintCV(615146) }),
    tx.tupleCV({ 'to': tx.uintCV(2714), 'usda': tx.uintCV(21325045) }),
    tx.tupleCV({ 'to': tx.uintCV(2715), 'usda': tx.uintCV(369087) }),
    tx.tupleCV({ 'to': tx.uintCV(2716), 'usda': tx.uintCV(393693) }),
    tx.tupleCV({ 'to': tx.uintCV(2717), 'usda': tx.uintCV(373188) }),
    tx.tupleCV({ 'to': tx.uintCV(2718), 'usda': tx.uintCV(205049) }),
    tx.tupleCV({ 'to': tx.uintCV(2719), 'usda': tx.uintCV(10252) }),
    tx.tupleCV({ 'to': tx.uintCV(2720), 'usda': tx.uintCV(6151455) }),
    tx.tupleCV({ 'to': tx.uintCV(2722), 'usda': tx.uintCV(16403881) }),
    tx.tupleCV({ 'to': tx.uintCV(2723), 'usda': tx.uintCV(11117) }),
    tx.tupleCV({ 'to': tx.uintCV(2724), 'usda': tx.uintCV(11943) }),
    tx.tupleCV({ 'to': tx.uintCV(2725), 'usda': tx.uintCV(82019) }),
    tx.tupleCV({ 'to': tx.uintCV(2727), 'usda': tx.uintCV(1025243) }),
    tx.tupleCV({ 'to': tx.uintCV(2729), 'usda': tx.uintCV(25426016) }),
    tx.tupleCV({ 'to': tx.uintCV(2730), 'usda': tx.uintCV(102524) }),
    tx.tupleCV({ 'to': tx.uintCV(2731), 'usda': tx.uintCV(256311) }),
    tx.tupleCV({ 'to': tx.uintCV(2732), 'usda': tx.uintCV(216959) }),
    tx.tupleCV({ 'to': tx.uintCV(2733), 'usda': tx.uintCV(102524) }),
    tx.tupleCV({ 'to': tx.uintCV(2734), 'usda': tx.uintCV(461359) })
  ]);
  const txOptions = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: 'arkadiko-claim-usda-yield-v2-1',
    functionName: 'add-claims',
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    fee: new BN(1000000, 10),
    postConditionMode: 1,
    network
  };

  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
