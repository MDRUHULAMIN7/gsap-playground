// gsap.to() – এই মেথডটি ব্যবহার করা হয় element কে **বর্তমান অবস্থান থেকে লক্ষ্য অবস্থানে animate করার জন্য**।
// এখানে .circle element কে (x:500, y:300) এ 3 সেকেন্ডে সরানো হবে


// gsap.to(".circle", {
//     x: 500,
//     y: 300,
//     duration: 3, // animation সময়
// })

// gsap.from() – এই মেথডটি ব্যবহার করা হয় element কে **কোনো start position থেকে animate করে বর্তমান অবস্থানে আনার জন্য**।
// এখানে .circle element কে (x:500, y:300) থেকে শুরু করে তার default অবস্থানে 3 সেকেন্ডে আনা হবে

// gsap.from(".circle", {
//     x: 500,
//     y: 300,
//     duration: 3, // animation সময়
// })

// gsap.fromTo() – এই মেথডটি ব্যবহার করা হয় element কে **নির্দিষ্ট start এবং end position দিয়ে animate করার জন্য**।
// এখানে .circle element শুরু হবে (x:500, y:300) থেকে এবং 1 সেকেন্ড পরে (x:500, y:0) তে পৌঁছাবে

// gsap.fromTo(".circle", {
//     x: 500,
//     y: 300,
//     duration: 1, // শুরু অবস্থার জন্য
// }, {
//     x: 500,
//     y: 0,       // শেষ অবস্থান
//     delay: 1,   // 1 সেকেন্ড পরে animation শুরু হবে
//     duration: 1 // animation সময়
// })

// gsap.set() – এই মেথডটি **instantly কোন property সেট করার জন্য** ব্যবহার হয়, animation হয় না।
// এখানে .circle element কে সরাসরি (x:500, y:300) অবস্থানে set করা হবে

// gsap.set(".circle", {
//   x: 500,
//   y: 300,
// });

gsap.from(".circle", {
  x: 500,
    y: 0,
    duration: 2,
  delay: 1,
});
