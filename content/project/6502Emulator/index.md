---
title: "MOS6502 Emulator in C"
status: "inprogress" # active, complete, inprogress
date: 2024-03-12T17:44:20+03:00
coverImage: mosChip.jpg
github: "https://github.com/firatbatar/6502Emulator"
website: ""
tags: [MOS6502, Emulator, C]
keywords: [C/C++, 6502, MOS6502, Emulator, 6502 Emulator]
summary: |
    A simple emulator for the MOS 6502 microprocessor written in C.
---

<!-- Custom styling -->
<style>
    a {
        text-decoration: none;
    }
</style>

## Writing a 6502 Emulator

I have started writing a simple emulator for the MOS 6502 microprocessor in C. The 6502 was used in many early home computers and game consoles, including the Apple II, the Commodore 64, and the Nintendo Entertainment System.  
I want to write an emulator that can run (almost) all the instructions of 6502 (mostly) correctly.

### Why?

The actual idea for this project developed a bit weirdly. The actual inspiration was about something else from an interesting source. I am taking a course on operating systems which started with a kind of an introductionary class on a very condensed and fast history of computers and operating systems. The class discussion and my external research on the topic revealed one thing: *I have no idea how a process work on low-level and how does the OS manage everything*.  

So, I wanted to learn more, but reading about something never teaches me anything. I have to do it. Therefore, the initial idea was to write a simple OS. But, I quickly realized that it was a bit too much for me at the moment and I wasn't that much interested doing something that will never be something actually ok as a side project. So, the OS part was kind of out.  
However, I could still learn about the CPU, which could light some to low-level part of things! The interesting part on top this was that I've always wanted to get into retro computing, to own a C64 or an Apple II. The great thing about these famous retro computers that they all use the same basic processor: **the MOS Technology 6502**!  

My researched revealed that _6502_ was a fairly easy processor to learn and understand while developing a _very basic_ emulator for it. So, I decided to go with that.

### Where This Project will Go?

I geniuely don't know. I don't know if I will be able to finish it or not. I don't know if I will be able to make it work or not. I might get bored or busy with something else and drop it. But, I am excited to start it and see where it goes. The general goal, however, is to write a program that mostly works without breaking.  

If I continue with it I'd want to convert into a more general program that could work for more like 65C02 or 6510. I might even write simple assembler for it or a simple OS. But, that's a long way to go.

### Resources and Tools

The CPU isn't the only thing I am trying to learn from this project. Many tools that I am using are actually new to me.  

I am using C, which new to me, to write program and I will (at least try to) write unit tests for it, again totally new for me. I will be using [**Unity**](https://github.com/ThrowTheSwitch/Unity) framework for the tests.  

I am using many documents and blogs from others to learn about the 6502 and get ideas. All the things that I use will be listed in the [GitHub repository](https://github.com/firatbatar/6502Emulator).