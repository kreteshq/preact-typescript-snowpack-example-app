import { h } from 'preact';
import { Link, Route } from "wouter-preact";
import { Router, Route as Routy } from "preact-router";
import { Suspense, lazy } from 'preact/compat';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Dashboard = () => <h1 class="text-2xl">This is dashboard</h1>
const HomePage = lazy(async () => {
  await sleep(4000);
  return import("./HomePage")
});

const App = () => {
  return (
    <main>
      <ul class="flex">
        <li class="mr-4">
          <Link href="/users/1" class="text-blue-500 hover:text-blue-800">Profile</Link>
        </li>

        <li class="mr-4">
          <Link href="/about" class="boo">About</Link>
        </li>
        <li class="mr-4">
          <Link href="/home" class="boo">Home</Link>
        </li>
        <li class="mr-4">
          <Link href="/dashboard" class="boo">Dashboard</Link>
        </li>
      </ul>

      <Route path="/about">About Us</Route>
      <Route path="/users/:name">
        {params => <div>Hello, {params.name}!</div>}
      </Route>
      <Suspense fallback={<div>loading...</div>}>
        <Route path="/home">
          <HomePage />
        </Route>
      </Suspense>

      <Router>
        <Routy path="/dashboard" component={Dashboard} />
      </Router>
    </main>
  );
};

export { App };
