// Copyright 2019-2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: List Subscriptions
//   description: Lists all subscriptions in the current project.
//   usage: node listSubscriptions.js

// [START pubsub_list_subscriptions]
// Imports the Google Cloud client library
import {PubSub, Subscription} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function listSubscriptions() {
  // Lists all subscriptions in the current project
  const [subscriptions] = await pubSubClient.getSubscriptions();
  console.log('Subscriptions:');
  subscriptions.forEach((subscription: Subscription) =>
    console.log(subscription.name),
  );
}
// [END pubsub_list_subscriptions]

function main() {
  listSubscriptions().catch(console.error);
}

main();
