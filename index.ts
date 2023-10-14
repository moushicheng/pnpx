#!/usr/bin/env node
import { test } from "@/test";
console.log("hello pnpx");
const path = process.env.LOCALAPPDATA;
console.log(path);
test();
