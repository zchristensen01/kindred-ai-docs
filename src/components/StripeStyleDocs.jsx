import React, { useState } from 'react';
import { useRef, useEffect } from "react";

const StripeStyleDocs = () => {
  // useState hook to manage which page is currently active
  // Default is set to 'introduction' in the About the API section
  const [activePage, setActivePage] = useState('introduction');
  
  // Function to render code blocks with syntax highlighting
  const renderCodeBlock = (code) => (
    <div className="bg-gray-800 rounded-md p-4 text-gray-100 text-sm font-mono overflow-x-auto">
      {code}
    </div>
  );
  
  // Function that renders the main content based on which page is currently active
  const renderContent = () => {
    // ======= ABOUT THE API SECTION ========
    if (activePage === 'introduction') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Introduction</h1>
          
          <p className="mb-4">
            The Kindred AI Hub is a transformative API platform designed to integrate emotional intelligence capabilities into applications. 
            It enables developers to build emotionally intelligent apps, assess users' emotional intelligence, and help users develop social and emotional skills.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">API Vision</p>
            <p className="text-blue-700">
              Much like Google Maps serves as the foundation for location services and Stripe for payments, 
              Kindred AI aims to be the go-to emotional intelligence API for AI assistants, HR tools, customer service automation, and leadership training.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">What is Emotional Intelligence in API Form?</h2>
          
          <p className="mb-4">
            Emotional Intelligence (EQ) is the ability to understand and manage emotions effectively. The Kindred AI Hub transforms this human capability 
            into a set of programmable APIs that developers can use to:
          </p>
          
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li className="mb-2">Analyze sentiment and emotion in user text and voice</li>
            <li className="mb-2">Assess a user's emotional intelligence through standardized evaluations</li>
            <li className="mb-2">Provide contextually relevant, emotionally intelligent AI responses</li>
            <li className="mb-2">Track emotional patterns and growth over time</li>
            <li className="mb-2">Generate insights for personal development and team dynamics</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Who Should Use the Kindred AI API?</h2>
          
          <p className="mb-4">
            Our API is designed for developers and companies looking to:
          </p>
          
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li className="mb-2"><strong>Chatbot/AI Assistant Developers</strong>: Add emotional intelligence to conversational AI</li>
            <li className="mb-2"><strong>HR and Leadership Platforms</strong>: Integrate EQ assessment and development tools</li>
            <li className="mb-2"><strong>Mental Health & Wellness Apps</strong>: Provide emotionally aware support and coaching</li>
            <li className="mb-2"><strong>Customer Service Solutions</strong>: Understand and respond to customer emotions</li>
            <li className="mb-2"><strong>Team Collaboration Tools</strong>: Enhance team dynamics with emotional insights</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Core Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-purple-600 mb-2">Conversation Intelligence</h3>
              <p className="text-gray-600">Advanced AI for emotionally aware conversations that adapt to user feelings and needs.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-purple-600 mb-2">Sentiment Analysis</h3>
              <p className="text-gray-600">Real-time analysis of emotional content in text and voice interactions.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-purple-600 mb-2">EQ Assessment</h3>
              <p className="text-gray-600">Standardized testing and evaluation of emotional intelligence capabilities.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-purple-600 mb-2">Growth Tracking</h3>
              <p className="text-gray-600">Monitoring and visualizing emotional intelligence development over time.</p>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Getting Started</h2>
          
          <p className="mb-6">
            To start using the Kindred AI Hub, you'll need to:
          </p>
          
          <ol className="list-decimal ml-6 mb-8">
            <li className="mb-3">
              <strong>Register for an API key</strong> - Sign up at our <a href="#" className="text-purple-600 hover:text-purple-800">Developer Dashboard</a>
            </li>
            <li className="mb-3">
              <strong>Authenticate your requests</strong> - See our <span className="text-purple-600 font-medium cursor-pointer" onClick={() => setActivePage('authentication')}>Authentication guide</span>
            </li>
            <li className="mb-3">
              <strong>Choose your integration</strong> - Explore our <span className="text-purple-600 font-medium cursor-pointer" onClick={() => setActivePage('conversation-api')}>AI Assistant APIs</span> or 
              <span className="text-purple-600 font-medium cursor-pointer" onClick={() => setActivePage('eq-assessment')}> EQ Assessment tools</span>
            </li>
            <li className="mb-3">
              <strong>Implement and test</strong> - Use our <span className="text-purple-600 font-medium cursor-pointer" onClick={() => setActivePage('api-playground')}>API Playground</span> to test your integration
            </li>
          </ol>
        </div>
      );
    }
    
    if (activePage === 'authentication') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Authentication</h1>
          
          <p className="mb-4">
            The Kindred AI Hub uses API keys to authenticate requests. You can view
            and manage your API keys in the Kindred AI Dashboard.
          </p>
          
          <p className="mb-4">
            Test mode secret keys have the prefix <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">sk_test_</code>, and live mode secret
            keys have the prefix <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">sk_live_</code>. Alternatively, you can use restricted
            API keys for granular permissions.
          </p>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
            <p className="text-amber-800 font-medium mb-2">Always keep your secret keys secure!</p>
            <p className="text-amber-700">Do not share your secret API keys in publicly accessible areas such as
            GitHub, client-side code, and so forth.</p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Authentication to the API</h2>
          
          <p className="mb-4">
            Authentication to the API is performed via HTTP Basic Auth. Provide
            your API key as the basic auth username value. You do not need to
            provide a password.
          </p>
          
          <p className="mb-4">
            If you need to authenticate via bearer auth (e.g., for a cross-origin
            request), use <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">-H "Authorization: Bearer sk_test_abc123..."</code> instead of
            <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">-u sk_test_abc123:</code>.
          </p>
          
          <p className="mb-4">
            All API requests must be made over HTTPS. Calls made over plain
            HTTP will fail. API requests without authentication will also fail.
          </p>
        </div>
      );
    }

    if (activePage === 'errors') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Errors & Responses</h1>
          
          <p className="mb-4">
            The Kindred AI Hub API uses conventional HTTP response codes to indicate the success or failure of an API request.
            In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that resulted from
            the provided information (e.g., a required parameter was missing), and codes in the 5xx range indicate an error
            with the Kindred AI Hub servers.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">HTTP Status Codes</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status Code</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">200 - OK</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Everything worked as expected.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">400 - Bad Request</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The request was unacceptable, often due to missing a required parameter.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">401 - Unauthorized</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    No valid API key provided.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">403 - Forbidden</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The API key doesn't have permissions to perform the request.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">404 - Not Found</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The requested resource doesn't exist.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">429 - Too Many Requests</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Too many requests hit the API too quickly. See Rate Limits.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">500, 502, 503, 504 - Server Errors</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Something went wrong on Kindred AI Hub's end.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Error Response Format</h2>
          
          <p className="mb-4">
            When an error occurs, Kindred AI Hub returns a consistent error response object to help you understand and resolve the issue.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "error": {
              "type": "authentication_error",
              "message": "Invalid API key provided.",
              "code": "invalid_key",
              "param": null,
              "request_id": "req_1a2b3c4d5e6f7g8h9i0j"
            }
          }`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Error Attributes</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Attribute</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">type</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The type of error returned. One of: api_error, authentication_error, invalid_request_error, rate_limit_error.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">message</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    A human-readable message providing more details about the error.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">code</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    A short string providing a programmatic identifier for the error.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">param</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    If the error is parameter-specific, the parameter related to the error.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">request_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    A unique identifier for the request. This can be used when contacting support.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Handling Errors</h2>
          
          <p className="mb-4">
            We recommend writing code that gracefully handles all possible API exceptions. Here are some tips:
          </p>
          
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li className="mb-2">Inspect the error type and message to understand what went wrong</li>
            <li className="mb-2">Use the request_id when contacting Kindred AI support about a specific error</li>
            <li className="mb-2">Implement appropriate retry logic for 5xx errors and rate limits</li>
            <li className="mb-2">Display user-friendly error messages for expected errors like authentication issues</li>
          </ul>
        </div>
      );
    }

    if (activePage === 'versioning') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">API Versioning</h1>
          
          <p className="mb-4">
            The Kindred AI Hub API uses versioning to ensure that breaking changes don't impact your integration.
            All requests should include a version in the URL path to ensure compatibility.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Current Version</h2>
          
          <p className="mb-4">
            The current version of the Kindred AI Hub API is <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">v1</code>.
            All API requests should be made to endpoints starting with:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <code className="text-md text-pink-600">https://api.kindredai.com/v1/</code>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Version Changes</h2>
          
          <p className="mb-4">
            When we make backwards-incompatible changes to the API, we release a new version. We'll provide ample notice and 
            migration guidance before making any breaking changes.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Deprecation Policy</h2>
          
          <p className="mb-4">
            When a feature is deprecated, we'll announce it publicly and continue to support it for at least 6 months before removing it.
            We encourage you to migrate to newer versions as they become available to take advantage of new features and improvements.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">API Changelog</p>
            <p className="text-blue-700">
              You can view our complete <span className="text-purple-600 font-medium cursor-pointer" onClick={() => setActivePage('changelog')}>API changelog</span> to
              stay up to date with all new features, improvements, and deprecations.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Version Lifecycle</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold text-green-600">Current</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The latest stable version recommended for all integrations.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold text-yellow-600">Maintained</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Supported but not receiving new features. Security updates only.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold text-orange-600">Deprecated</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Will be removed in the future. Migration recommended.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold text-red-600">Retired</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    No longer supported. Requests will fail.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activePage === 'rate-limits') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Rate Limits</h1>
          
          <p className="mb-4">
            To ensure the stability and availability of the Kindred AI Hub API for all users, we implement rate limits
            on the number of requests that can be made in a given time period. These limits vary based on your subscription plan.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Current Rate Limits</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Plan</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">API Requests</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Emotional Analysis Requests</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Developer (Free)</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    60 per minute
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    20 per minute
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Growth</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    300 per minute
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    100 per minute
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Business</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    500 per minute
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    250 per minute
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Enterprise</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Custom
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Custom
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Rate Limit Response</h2>
          
          <p className="mb-4">
            When you exceed the rate limit, the API will return a <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">429 Too Many Requests</code> response
            with the following headers:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Header</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">X-RateLimit-Limit</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The maximum number of requests allowed in the current time window.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">X-RateLimit-Remaining</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The number of requests remaining in the current time window.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">X-RateLimit-Reset</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The time at which the current rate limit window resets (Unix timestamp).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">Retry-After</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The number of seconds to wait before retrying the request.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Best Practices for Rate Limits</h2>
          
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li className="mb-2">
              <strong>Implement backoff logic</strong> - If you receive a rate limit error, use exponential backoff to gradually increase the time between retries.
            </li>
            <li className="mb-2">
              <strong>Monitor usage</strong> - Keep track of your API usage to avoid hitting rate limits, especially during peak periods.
            </li>
            <li className="mb-2">
              <strong>Batch requests</strong> - Where possible, batch multiple operations into a single API call to reduce the total number of requests.
            </li>
            <li className="mb-2">
              <strong>Cache responses</strong> - Implement client-side caching for frequently accessed data to reduce API calls.
            </li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Need Higher Limits?</p>
            <p className="text-blue-700">
              If your application requires higher rate limits, please consider upgrading your plan or 
              <a href="#" className="text-purple-600 hover:text-purple-800"> contact our sales team</a> for custom enterprise solutions.
            </p>
          </div>
        </div>
      );
    }

    if (activePage === 'request-ids') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Request IDs & Metadata</h1>
          
          <p className="mb-4">
            Each API request has a unique identifier that helps with troubleshooting and debugging.
            This request ID appears in the response headers and in any error messages.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Request IDs</h2>
          
          <p className="mb-4">
            All API responses include a <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">request_id</code> in both the headers and the response body (for error responses).
            This unique identifier helps our support team investigate any issues you encounter. When contacting support about an API problem,
            always include the request ID to expedite troubleshooting.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`// Example response header
          X-Request-ID: req_1a2b3c4d5e6f7g8h9i0j

          // Example error response body
          {
            "error": {
              "message": "Invalid API key provided",
              "request_id": "req_1a2b3c4d5e6f7g8h9i0j"
            }
          }`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Metadata</h2>
          
          <p className="mb-4">
            Many resources in the Kindred AI Hub API support a metadata parameter, which allows you to attach
            key-value pairs to an object for your own use. These metadata fields can be useful for storing additional
            information about resources in a structured format.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`// Adding metadata when creating an EQ assessment
          {
            "user_id": "user_1a2b3c4d",
            "assessment_type": "scenario_based",
            "metadata": {
              "department": "Sales",
              "manager": "Jane Smith",
              "employee_id": "EMP12345",
              "custom_field": "Any value you want"
            }
          }`}
            </pre>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Metadata Guidelines</p>
            <p className="text-blue-700">
              Metadata keys should be strings of 40 characters or less, and values can be strings, numbers, or booleans.
              Avoid using sensitive data in metadata as it's not encrypted. You can store up to 20 key-value pairs per resource.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Idempotency Keys</h2>
          
          <p className="mb-4">
            For POST requests, you can optionally provide an idempotency key to ensure that the same operation isn't
            processed multiple times. This is useful for preventing duplicate operations during network failures or
            timeouts. Include the key in the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">Idempotency-Key</code> header.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`// Example request with idempotency key
          POST /v1/eq/assessment
          Idempotency-Key: a1b2c3d4e5f6g7h8i9j0
          Content-Type: application/json

          {
            "user_id": "user_1a2b3c4d",
            "assessment_type": "scenario_based"
          }`}
            </pre>
          </div>
          
          <p className="mb-4">
            If you submit the same request with the same idempotency key, the API will return the same response as the original request,
            without executing the operation again.
          </p>
        </div>
      );
    }

    // ======= AI ASSISTANT SECTION ========
    if (activePage === 'conversation-api') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Conversation API</h1>
          
          <p className="mb-4">
            The Conversation API enables you to integrate Kindred AI's emotionally intelligent conversational capabilities
            into your applications. This allows you to build AI assistants and chatbots that can understand and respond 
            appropriately to emotional nuances in user messages.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Key Capabilities</p>
            <p className="text-blue-700">
              The Conversation API handles the core interaction between users and Kindred AI, enabling emotionally intelligent
              responses, contextual understanding, and personalized interactions. It's designed to enhance user experience
              through emotionally aware digital conversations.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/conversation/send</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Send a message to the AI and receive a response.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">GET /v1/conversation/history</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Retrieve conversation history for a specific user or conversation.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/conversation/create</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Create a new conversation session.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`DELETE /v1/conversation/{id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Delete a conversation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Sending a Message</h2>
          
          <p className="mb-4">
            To send a message to the AI and get a response, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/conversation/send</code> endpoint.
            This allows your application to exchange messages with the Kindred AI system.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">message</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The message content from the user.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Optional Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the user sending the message. Used for conversation continuity.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">conversation_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of an existing conversation to continue. If not provided, a new conversation will be created.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">context</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    object
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Additional context about the conversation, such as domain, user profile, or situation.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">model</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The model to use for generating the response. Default is "kindred-1".
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">response_format</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The format for the AI response, either "text" (default) or "json".
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response Format</h3>
          
          <p className="mb-4">
            The response includes the AI's message, the conversation ID, and optional emotional analysis of the interaction.
          </p>
        </div>
      );
    }

    if (activePage === 'user-context') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">User Context</h1>
          
          <p className="mb-4">
            The User Context API allows you to provide additional information about users to help the Kindred AI
            system generate more personalized and contextually relevant responses. By sharing user preferences,
            history, and other contextual details, you can create a more tailored experience.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Why Context Matters</p>
            <p className="text-blue-700">
              Providing user context significantly improves the emotional intelligence of AI interactions.
              It enables the system to understand user preferences, past behaviors, and emotional patterns,
              resulting in more empathetic and personalized responses.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/user/context</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Create or update user context information.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/user/context/{user_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Retrieve context information for a specific user.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`DELETE /v1/user/context/{user_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Delete context information for a user.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Creating or Updating User Context</h2>
          
          <p className="mb-4">
            To provide or update context for a user, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/user/context</code> endpoint.
            This allows you to store information that will be used to personalize AI interactions.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Unique identifier for the user.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Optional Context Fields</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Field</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">profile</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    object
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Basic user profile information (name, job title, preferences).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">eq_data</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    object
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Emotional intelligence data, including assessment results and growth areas.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">preferences</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    object
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    User preferences for communication style, topic interests, etc.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">history</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    object
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Summary of past interactions and important events.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">metadata</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    object
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Additional custom metadata for your application's needs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Best Practices</h3>
          
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li className="mb-2">
              <strong>Keep context relevant</strong> - Only provide information that's useful for personalizing interactions.
            </li>
            <li className="mb-2">
              <strong>Update regularly</strong> - Refresh context as user preferences and situations change.
            </li>
            <li className="mb-2">
              <strong>Respect privacy</strong> - Only collect and store user information with appropriate consent.
            </li>
            <li className="mb-2">
              <strong>Prioritize security</strong> - Ensure sensitive user data is properly secured.
            </li>
          </ul>
        </div>
      );
    }

    if (activePage === 'sentiment-analysis') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Sentiment Analysis</h1>
          
          <p className="mb-4">
            The Sentiment Analysis API allows you to analyze text for emotional content, providing detailed insights about 
            expressed emotions, overall sentiment, and emotional patterns. This helps applications understand how users are feeling
            and respond appropriately.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Powerful Emotional Analysis</p>
            <p className="text-blue-700">
              Our sentiment analysis goes beyond basic positive/negative classification, detecting complex emotions,
              intensity, and mixed emotional states to provide a nuanced understanding of the emotional content in text.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/analysis/sentiment</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Analyze text for emotional content and sentiment.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/analysis/sentiment/batch</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Analyze multiple text samples in a single request.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/analysis/sentiment/stream</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Stream real-time sentiment analysis for continuous text input.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Analyzing Emotions</h2>
          
          <p className="mb-4">
            To analyze text for emotional content, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/analysis/sentiment</code> endpoint.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">text</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The text content to analyze for emotional content.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Optional Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">context</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Optional context for the analysis (e.g., "health_journey", "customer_service").
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Optional user ID to associate with this analysis.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">model</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Model version to use (default is "standard"). Options: "standard", "detailed", "fast".
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">language</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                    </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Language of the text. Auto-detected if not specified. Example: "en", "es", "fr".
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response Structure</h3>
          
          <p className="mb-4">
            The response includes detailed analysis of the emotional content in the provided text.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "primary_emotion": "frustration",
            "emotion_scores": {
              "joy": 0.2,
              "sadness": 0.3,
              "anger": 0.4,
              "fear": 0.1,
              "surprise": 0.0
            },
            "sentiment": -0.1,
            "analysis": {
              "mixed_emotions": true,
              "emotional_complexity": 0.6,
              "key_phrases": ["feeling frustrated", "stay positive"],
              "interpretation": "The user is expressing frustration but showing resilience and determination."
            }
          }`}
            </pre>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response Fields</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Field</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">primary_emotion</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The dominant emotion detected in the text.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">emotion_scores</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    object
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Scores for each detected emotion, ranging from 0.0 to 1.0.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">sentiment</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    number
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Overall sentiment score from -1.0 (negative) to 1.0 (positive).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">analysis</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    object
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Deeper analysis of the emotional content, including complexity and key phrases.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activePage === 'response-customization') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Response Customization</h1>
          
          <p className="mb-4">
            The Response Customization API allows you to tailor how Kindred AI responds to users based on your application's needs.
            You can adjust the tone, style, length, and focus of AI responses to create the perfect experience for your users.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Flexible Persona Design</p>
            <p className="text-blue-700">
              Whether you need a supportive coach, an objective analyst, or a friendly companion, our Response Customization
              API lets you create the perfect AI persona for your application.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/conversation/customize</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Create or update a custom response profile.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/conversation/customize/{profile_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Retrieve a custom response profile.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`DELETE /v1/conversation/customize/{profile_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Delete a custom response profile.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Creating a Custom Response Profile</h2>
          
          <p className="mb-4">
            To create a customized response profile, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/conversation/customize</code> endpoint.
            This allows you to define how the AI should respond to users.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">name</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    A name for your custom response profile.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Optional Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">tone</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The emotional tone of responses (e.g., "supportive", "professional", "friendly").
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">persona</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The character persona (e.g., "coach", "therapist", "assistant", "friend").
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">response_length</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Preferred response length (e.g., "concise", "moderate", "detailed").
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">focus_areas</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    array
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Areas to emphasize in responses (e.g., ["empathy", "practical_advice", "motivation"]).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">avoid_topics</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    array
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Topics to avoid in responses.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">language_style</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Language complexity (e.g., "simple", "conversational", "technical").
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">custom_instructions</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Free-form instructions for fine-tuning response style.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <p className="mb-4">
            When successful, the API returns the created or updated response profile:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "id": "profile_12345abcde",
            "name": "Supportive Coach Profile",
            "tone": "supportive",
            "persona": "coach",
            "response_length": "moderate",
            "focus_areas": ["empathy", "motivation", "practical_advice"],
            "avoid_topics": ["politics", "religion"],
            "language_style": "conversational",
            "custom_instructions": "Focus on positive reinforcement and actionable next steps.",
            "created_at": "2025-02-15T12:00:00Z",
            "updated_at": "2025-02-15T12:00:00Z"
          }`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Using a Custom Profile</h2>
          
          <p className="mb-4">
            To use a custom response profile with the Conversation API, include the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">profile_id</code>
            parameter in your conversation requests:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`POST /v1/conversation/send
          {
            "message": "I'm struggling with my team at work",
            "user_id": "user_12345",
            "profile_id": "profile_12345abcde"
          }`}
            </pre>
          </div>
        </div>
      );
    }

    if (activePage === 'real-time-coaching') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Real-Time Coaching</h1>
          
          <p className="mb-4">
            The Real-Time Coaching API provides in-the-moment feedback and guidance based on user interactions.
            It can analyze messages, suggest improvements, and offer feedback to help users develop better 
            communication skills and emotional intelligence.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Live Guidance</p>
            <p className="text-blue-700">
              Unlike standard AI responses, the Real-Time Coaching API focuses on helping users improve their
              own communication and emotional skills rather than just responding to their queries.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/coaching/analyze</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Analyze text and provide coaching feedback.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/coaching/suggestion</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Generate an improved version of user text.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/coaching/live</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Provide real-time coaching during conversations.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Analyzing Text for Coaching</h2>
          
          <p className="mb-4">
            To get coaching feedback on text, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/coaching/analyze</code> endpoint.
            This analyzes the content and provides coaching suggestions.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">text</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The text content to analyze and provide coaching for.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Optional Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the user to personalize coaching for.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">context</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The communication context (e.g., "email", "team_message", "customer_service").
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">focus_areas</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    array
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Specific areas to focus coaching on (e.g., ["empathy", "clarity", "assertiveness"]).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">coaching_style</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Preferred coaching approach (e.g., "supportive", "direct", "socratic").
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <p className="mb-4">
            The response includes coaching feedback and suggestions for improvement.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "analysis": {
              "primary_issues": ["overuse_of_absolutes", "blaming_language"],
              "strengths": ["clear_communication", "specific_examples"]
            },
            "coaching": {
              "feedback": "I noticed you're using absolute terms like 'always' and 'never' which can make your message feel accusatory.",
              "suggestion": "Try using more specific language about the situations that concern you, and express how they affect you personally.",
              "reframed_example": "I'm feeling frustrated because I've noticed several times in the past month when deliverables weren't ready on time."
            },
            "growth_opportunities": [
              {
                "area": "constructive_feedback",
                "tip": "Focus on specific behaviors and their impact rather than generalizing or attributing intentions."
              },
              {
                "area": "emotional_awareness",
                "tip": "Explicitly name your emotions to help others understand your perspective."
              }
            ]
          }`}
            </pre>
          </div>
        </div>
      );
    }

    // ======= EMOTIONAL INTELLIGENCE SECTION ========
    if (activePage === 'eq-assessment') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">EQ Assessment</h1>
          
          <p className="mb-4">
            The EQ Assessment API enables you to measure and evaluate emotional intelligence in users. 
            These standardized assessments help identify emotional strengths and growth areas, providing 
            a foundation for personalized development.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Research-Backed Assessments</p>
            <p className="text-blue-700">
              Our EQ Assessment tools are grounded in established psychological frameworks for emotional intelligence,
              providing reliable insights into self-awareness, self-management, social awareness, and relationship management.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/eq/assessment/create</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Create a new EQ assessment session.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/eq/assessment/submit</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Submit assessment responses and get results.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/eq/assessment/{id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Retrieve a specific assessment session.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/eq/assessment/user/{user_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Get all assessments for a specific user.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Creating an Assessment</h2>
          
          <p className="mb-4">
            To start a new EQ assessment, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/eq/assessment/create</code> endpoint.
            This initializes a new assessment session and returns the questions to present to the user.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Unique identifier for the user taking the assessment.
                  </td>
                  </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Optional Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">assessment_type</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Type of assessment: "standard" (default), "scenario_based", "360_feedback".
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">focus_areas</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    array
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Specific EQ domains to focus on (e.g., ["self_awareness", "empathy"]).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">difficulty</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Assessment difficulty: "beginner", "intermediate" (default), "advanced".
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">language</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Language for the assessment (default: "en").
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">metadata</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    object
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Additional custom metadata for tracking purposes.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <p className="mb-4">
            The response includes an assessment ID and the questions for the user to answer.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "assessment_id": "eq_assess_12345abcde",
            "user_id": "user_12345",
            "assessment_type": "standard",
            "created_at": "2025-02-15T12:00:00Z",
            "expires_at": "2025-02-15T13:00:00Z",
            "status": "in_progress",
            "questions": [
              {
                "id": "q1",
                "text": "I can accurately recognize my own emotions as they happen.",
                "type": "likert_scale",
                "options": [
                  "Strongly Disagree",
                  "Disagree",
                  "Neutral",
                  "Agree",
                  "Strongly Agree"
                ],
                "domain": "self_awareness"
              },
              {
                "id": "q2",
                "text": "When I'm upset, I can identify exactly what emotion I'm feeling.",
                "type": "likert_scale",
                "options": [
                  "Strongly Disagree",
                  "Disagree",
                  "Neutral",
                  "Agree",
                  "Strongly Agree"
                ],
                "domain": "self_awareness"
              },
              // Additional questions...
            ],
            "total_questions": 30,
            "estimated_time_minutes": 10
          }`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Submitting Assessment Responses</h2>
          
          <p className="mb-4">
            Once the user has completed the assessment, submit their responses using the 
            <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600"> POST /v1/eq/assessment/submit</code> endpoint.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">assessment_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the assessment session.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">responses</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    array
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Array of question IDs and the user's responses.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <p className="mb-4">
            The response includes the assessment results with scores and insights.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "assessment_id": "eq_assess_12345abcde",
            "user_id": "user_12345",
            "completed_at": "2025-02-15T12:20:00Z",
            "status": "completed",
            "results": {
              "overall_score": 76,
              "domain_scores": {
                "self_awareness": 82,
                "self_management": 68,
                "social_awareness": 79,
                "relationship_management": 75
              },
              "strengths": [
                {
                  "domain": "self_awareness",
                  "description": "You excel at recognizing your own emotions and understanding how they affect your thoughts and behavior."
                },
                {
                  "domain": "social_awareness",
                  "description": "You have a strong ability to detect and understand others' emotions and social dynamics."
                }
              ],
              "growth_areas": [
                {
                  "domain": "self_management",
                  "description": "You may benefit from developing strategies to regulate emotions in challenging situations."
                }
              ],
              "recommended_focus": "self_management",
              "percentile": 72
            },
            "next_steps": {
              "recommended_resources": [
                {
                  "type": "exercise",
                  "title": "Emotional Regulation Techniques",
                  "url": "https://api.kindredai.com/resources/eq/self-management/techniques"
                }
              ],
              "suggested_reassessment": "3 months"
            }
          }`}
            </pre>
          </div>
        </div>
      );
    }

    if (activePage === 'self-awareness') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Self-Awareness & Management</h1>
          
          <p className="mb-4">
            The Self-Awareness & Management API provides tools to help users understand and manage their own
            emotions more effectively. These APIs provide personalized insights, development activities, and 
            progress tracking for emotional self-regulation and awareness.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Inner Emotional Intelligence</p>
            <p className="text-blue-700">
              Self-awareness and self-management represent the "inner" components of emotional intelligence,
              focusing on a person's ability to recognize their own emotions and regulate their responses.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/eq/self/insights/{user_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Get personalized self-awareness insights for a user.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/eq/self/log</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Log emotional experiences and reflections.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">GET /v1/eq/self/exercises</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Retrieve personalized development exercises.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/eq/self/progress/{user_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Track progression in self-awareness and management over time.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Getting Self-Awareness Insights</h2>
          
          <p className="mb-4">
            To retrieve personalized insights for a user, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">{`GET /v1/eq/self/insights/{user_id}`}</code> endpoint.
            This provides custom insights based on the user's assessment results and emotional logs.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the user to get insights for (in path).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">timeframe</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Time period for insights: "week", "month" (default), "quarter", "all".
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <p className="mb-4">
            The response includes personalized insights and recommendations.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "user_id": "user_12345",
            "timeframe": "month",
            "insights": [
              {
                "category": "emotion_patterns",
                "insight": "You tend to experience anxiety most frequently in work-related situations, especially before presentations or team meetings.",
                "confidence": 0.85
              },
              {
                "category": "triggers",
                "insight": "Time pressure appears to be a significant trigger for stress in your daily routine.",
                "confidence": 0.92
              },
              {
                "category": "regulation_strategies",
                "insight": "Deep breathing exercises have been particularly effective for you in managing stress.",
                "confidence": 0.78
              }
            ],
            "recommendations": [
              {
                "type": "practice",
                "title": "Mindfulness Before Meetings",
                "description": "Try a 2-minute mindfulness exercise before work meetings to reduce anticipatory anxiety.",
                "relevance": "high"
              },
              {
                "type": "reflection",
                "title": "Time Management Reflection",
                "description": "Reflect on how you structure your time and identify opportunities to build in buffers.",
                "relevance": "medium"
              }
            ],
            "strengths": [
              "emotional_vocabulary",
              "pattern_recognition"
            ],
            "growth_areas": [
              "stress_management",
              "impulse_control"
            ]
          }`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Logging Emotional Experiences</h2>
          
          <p className="mb-4">
            Users can log their emotional experiences using the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/eq/self/log</code> endpoint.
            This helps build self-awareness and provides data for personalized insights.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the user logging the emotion.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">emotion</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The primary emotion experienced.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">intensity</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    number
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The intensity of the emotion on a scale from 1-10.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activePage === 'social-awareness') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Social Awareness & Relationship Management</h1>
          
          <p className="mb-4">
            The Social Awareness & Relationship Management API provides tools for understanding and navigating social interactions
            effectively. These APIs help users develop empathy, read social cues accurately, and build stronger relationships.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Interpersonal Emotional Intelligence</p>
            <p className="text-blue-700">
              Social awareness and relationship management represent the "external" components of emotional intelligence,
              focusing on understanding others' emotions and managing social interactions effectively.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/eq/social/insights/{user_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Get social awareness insights for a user.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/eq/social/scenario</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Generate social scenarios for practice.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">GET /v1/eq/social/exercises</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Retrieve social skill development exercises.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/eq/social/feedback</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Submit social interaction for analysis and feedback.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Getting Social Awareness Insights</h2>
          
          <p className="mb-4">
            To retrieve social intelligence insights for a user, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">{`GET /v1/eq/social/insights/{user_id}`}</code> endpoint.
            This provides insights about a user's social awareness and relationship management skills.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the user to get insights for (in path).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">context</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Optional context for insights (e.g., "work", "family", "friendships").
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <p className="mb-4">
            The response includes insights about the user's social awareness and relationship skills.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "user_id": "user_12345",
            "context": "work",
            "social_insights": {
              "empathy": {
                "score": 78,
                "strengths": [
                  "You consistently recognize others' emotional states",
                  "You show genuine concern for colleagues' perspectives"
                ],
                "growth_areas": [
                  "You may sometimes miss subtle nonverbal cues in group settings"
                ]
              },
              "conflict_resolution": {
                "score": 65,
                "strengths": [
                  "You stay calm during disagreements"
                ],
                "growth_areas": [
                  "You could work on finding compromise more quickly",
                  "You sometimes avoid necessary difficult conversations"
                ]
              },
              "communication": {
                "score": 82,
                "strengths": [
                  "You express ideas clearly and concisely",
                  "You adapt your communication style to different audiences"
                ],
                "growth_areas": [
                  "You could improve active listening techniques"
                ]
              }
            },
            "recommendations": [
              {
                "skill": "active_listening",
                "exercise": "Practice summarizing what others say before responding",
                "difficulty": "beginner"
              },
              {
                "skill": "conflict_resolution",
                "exercise": "Role-play difficult conversations with a focus on finding win-win outcomes",
                "difficulty": "intermediate"
              }
            ]
          }`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Generating Social Scenarios</h2>
          
          <p className="mb-4">
            To create realistic social scenarios for practice and development, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/eq/social/scenario</code> endpoint.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the user to generate a scenario for.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">scenario_type</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Type of scenario to generate (e.g., "conflict", "feedback", "networking").
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activePage === 'emotion-tracking') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Emotion Tracking</h1>
          
          <p className="mb-4">
            The Emotion Tracking API enables long-term monitoring of emotional patterns and trends. It helps users
            and organizations understand emotional changes over time, identify patterns, and measure growth in
            emotional intelligence.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Emotional Analytics</p>
            <p className="text-blue-700">
              By tracking emotions systematically over time, users can gain insights into their emotional 
              patterns, triggers, and development areas, supporting continuous improvement in emotional intelligence.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/eq/tracking/log</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Log an emotional state or event.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/eq/tracking/{user_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Retrieve emotional tracking data for a user.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/eq/tracking/trends/{user_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Analyze emotional trends and patterns over time.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/eq/tracking/trigger</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Log and analyze emotional triggers.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Logging Emotions</h2>
          
          <p className="mb-4">
            To log an emotional state or event, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/eq/tracking/log</code> endpoint.
            This allows users to record their emotions, contexts, and responses.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the user logging the emotion.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">emotion</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The primary emotion experienced.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">intensity</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    number
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The intensity of the emotion on a scale from 1-10.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Optional Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">context</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The situation or context where the emotion occurred.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">trigger</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    What triggered the emotion.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">response</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    How the user responded to the emotion.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">secondary_emotions</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    array
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Additional emotions experienced simultaneously.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">timestamp</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    When the emotion occurred (ISO 8601 format). Defaults to current time.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <p className="mb-4">
            The response confirms the log entry and provides an ID for the record.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "id": "emo_log_12345abcde",
            "user_id": "user_12345",
            "emotion": "anxiety",
            "intensity": 7,
            "context": "work presentation",
            "trigger": "public speaking",
            "response": "used deep breathing technique",
            "secondary_emotions": ["excitement", "worry"],
            "timestamp": "2025-02-15T14:30:00Z",
            "created_at": "2025-02-15T14:35:12Z"
          }`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Analyzing Emotional Trends</h2>
          
          <p className="mb-4">
            To analyze a user's emotional patterns over time, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">{`GET /v1/eq/tracking/trends/{user_id}`}</code> endpoint.
            This provides insights into emotional patterns, common triggers, and progress in emotional regulation.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the user to analyze trends for (in path).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">start_date</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Start date for analysis (ISO 8601 format). Default is 30 days ago.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">end_date</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    End date for analysis (ISO 8601 format). Default is current date.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">granularity</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Data granularity: "day", "week", or "month". Default is "day".
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activePage === 'team-leadership') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Team & Leadership Insights</h1>
          
          <p className="mb-4">
            The Team & Leadership Insights API provides tools for understanding and improving emotional intelligence
            in team settings and leadership roles. It helps organizations build stronger teams, develop emotionally
            intelligent leaders, and enhance workplace culture.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Organizational EQ</p>
            <p className="text-blue-700">
              Research shows that teams with higher emotional intelligence have better collaboration, lower turnover,
              and higher productivity. Leaders with strong EQ create psychological safety and inspire better performance.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/eq/team/analysis/{team_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Get EQ analysis for a team.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/eq/leadership/insights/{user_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Get leadership EQ insights for a specific user.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/eq/team/feedback</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Submit team feedback for analysis.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/eq/team/recommendations/{team_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Get team development recommendations.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Team EQ Analysis</h2>
          
          <p className="mb-4">
            To get an emotional intelligence analysis for a team, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">{`GET /v1/eq/team/analysis/{team_id}`}</code> endpoint.
            This provides insights into team dynamics, emotional patterns, and collective strengths and growth areas.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">team_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the team to analyze (in path).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">include_individual</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    boolean
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Whether to include individual member insights. Default is false.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">timeframe</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Analysis timeframe: "month", "quarter", or "year". Default is "quarter".
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <p className="mb-4">
            The response includes team-level EQ analysis and insights.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "team_id": "team_12345",
            "name": "Product Development",
            "assessment_date": "2025-02-15T00:00:00Z",
            "timeframe": "quarter",
            "team_size": 8,
            "completion_rate": 100,
            "team_eq_score": 76,
            "percentile": 68,
            "team_strengths": [
              {
                "domain": "social_awareness",
                "score": 82,
                "details": "The team shows strong empathy and understanding of stakeholder needs."
              },
              {
                "domain": "relationship_management",
                "score": 79,
                "details": "Team members collaborate effectively and support each other during challenges."
              }
            ],
            "team_growth_areas": [
              {
                "domain": "conflict_resolution",
                "score": 65,
                "details": "The team could improve how it addresses and resolves internal disagreements."
              }
            ],
            "team_dynamics": {
              "psychological_safety": 74,
              "communication_effectiveness": 81,
              "emotional_resilience": 77
            },
            "recommendations": [
              {
                "focus_area": "conflict_resolution",
                "activity": "Structured conflict resolution workshop",
                "expected_impact": "high"
              },
              {
                "focus_area": "self_awareness",
                "activity": "Regular team retrospectives with emotional check-ins",
                "expected_impact": "medium"
              }
            ]
          }`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Leadership EQ Insights</h2>
          
          <p className="mb-4">
            To get leadership-focused emotional intelligence insights for a user, use the 
            <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">{`GET /v1/eq/leadership/insights/{user_id}`}</code> endpoint.
            This provides insights specific to leadership capabilities.
          </p>
        </div>
      );
    }

    // ======= CORE FEATURES SECTION ========
    if (activePage === 'data-dashboards') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Data Dashboards</h1>
          
          <p className="mb-4">
            The Data Dashboards API allows you to access and embed emotional intelligence data visualizations
            and insights into your applications. This makes it easy to display meaningful EQ data to users
            in a visually appealing and actionable format.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Visual EQ Analytics</p>
            <p className="text-blue-700">
              Data visualizations help users understand complex emotional intelligence data at a glance,
              making it easier to identify patterns, track progress, and take action on insights.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/dashboard/user/{user_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Get dashboard data for an individual user.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/dashboard/team/{team_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Get dashboard data for a team.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/dashboard/organization/{org_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Get dashboard data for an entire organization.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/dashboard/embed/{dashboard_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Get embed code for a specific dashboard.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Getting User Dashboard Data</h2>
          
          <p className="mb-4">
            To retrieve dashboard data for a specific user, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">{`GET /v1/dashboard/user/{user_id}`}</code> endpoint.
            This provides visualizable data about the user's emotional intelligence.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">user_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the user to get dashboard data for (in path).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">timeframe</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Data timeframe: "month", "quarter", or "year". Default is "month".
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">metrics</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    array
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Specific metrics to include in the dashboard.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <p className="mb-4">
            The response includes dashboard-ready data for visualization.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "user_id": "user_12345",
            "timeframe": "month",
            "date_range": {
              "start": "2025-01-15T00:00:00Z",
              "end": "2025-02-15T00:00:00Z"
            },
            "eq_scores": {
              "current": 78,
              "previous": 72,
              "change": 6,
              "history": [
                {"date": "2024-09-15", "score": 65},
                {"date": "2024-10-15", "score": 68},
                {"date": "2024-11-15", "score": 70},
                {"date": "2025-01-15", "score": 72},
                {"date": "2025-02-15", "score": 78}
              ]
            },
            "domain_scores": {
              "self_awareness": {
                "current": 82,
                "previous": 76,
                "change": 6
              },
              "self_management": {
                "current": 74,
                "previous": 70,
                "change": 4
              },
              "social_awareness": {
                "current": 80,
                "previous": 75,
                "change": 5
              },
              "relationship_management": {
                "current": 76,
                "previous": 68,
                "change": 8
              }
            },
            "emotion_tracking": {
              "primary_emotions": [
                {"emotion": "joy", "frequency": 42},
                {"emotion": "anxiety", "frequency": 28},
                {"emotion": "anger", "frequency": 12},
                {"emotion": "sadness", "frequency": 8},
                {"emotion": "surprise", "frequency": 6},
                {"emotion": "fear", "frequency": 4}
              ],
              "intensity_trends": [
                {"date": "2025-01-15", "average_intensity": 6.2},
                {"date": "2025-01-22", "average_intensity": 5.8},
                {"date": "2025-01-29", "average_intensity": 5.5},
                {"date": "2025-02-05", "average_intensity": 5.2},
                {"date": "2025-02-12", "average_intensity": 4.9}
              ]
            },
            "growth_metrics": {
              "completed_exercises": 12,
              "tracking_consistency": 85,
              "reflection_quality": 78
            },
            "visualizations": {
              "radar_chart_data": {
                "labels": ["Self-Awareness", "Self-Management", "Social Awareness", "Relationship Management"],
                "datasets": [
                  {
                    "label": "Current",
                    "data": [82, 74, 80, 76]
                  },
                  {
                    "label": "Previous",
                    "data": [76, 70, 75, 68]
                  }
                ]
              },
              "line_chart_data": {
                "labels": ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
                "datasets": [
                  {
                    "label": "EQ Score",
                    "data": [65, 68, 70, 72, 72, 78]
                  }
                ]
              }
            }
          }`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Getting Embed Code</h2>
          
          <p className="mb-4">
            To get embed code for including a dashboard in your application, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">{`GET /v1/dashboard/embed/{dashboard_id}`}</code> endpoint.
            This provides HTML code that can be embedded in your application.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">dashboard_id</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    ID of the dashboard to embed (in path).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">theme</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Visual theme for the dashboard: "light", "dark", or "auto". Default is "light".
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">width</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Width of the embedded dashboard. Default is "100%".
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">height</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Height of the embedded dashboard. Default is "600px".
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activePage === 'integrations') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Integrations</h1>
          
          <p className="mb-4">
            The Integrations API allows you to connect Kindred AI Hub with other platforms and services, 
            enabling seamless emotional intelligence capabilities across your technical ecosystem.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Connected Ecosystem</p>
            <p className="text-blue-700">
              By integrating with popular workplace tools like Slack, Zoom, and Microsoft Teams, you can bring
              emotional intelligence directly to where users already work, increasing adoption and impact.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">GET /v1/integrations/list</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    List available integrations.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/integrations/connect</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Connect a new integration.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/integrations/status/{integration_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Check integration status.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`DELETE /v1/integrations/{integration_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Disconnect an integration.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Supported Integrations</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Platform</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Features</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Slack</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    AI coaching, message sentiment analysis, team insights
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Microsoft Teams</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    AI coaching, message sentiment analysis, team insights
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Zoom</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Meeting analysis, emotion detection, conversation insights
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Google Workspace</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Document sentiment analysis, email coaching, calendar integration
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Beta
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Salesforce</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Customer sentiment analysis, sales coaching, relationship insights
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Coming Soon
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Connecting an Integration</h2>
          
          <p className="mb-4">
            To connect a new integration, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/integrations/connect</code> endpoint.
            This initiates the OAuth flow or API key setup process for the selected platform.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">platform</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The platform to integrate with (e.g., "slack", "ms_teams", "zoom").
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">redirect_uri</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    URI to redirect to after authentication (for OAuth flows).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Optional Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">scopes</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    array
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Permission scopes to request for the integration.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">api_key</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    API key for platforms that use key-based authentication.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">features</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    array
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Specific features to enable for this integration.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activePage === 'webhooks') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Webhooks</h1>
          
          <p className="mb-4">
            The Webhooks API allows you to receive real-time notifications when specific events occur in the Kindred AI Hub.
            This enables you to automate workflows, update your systems, and respond promptly to important events.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Event-Driven Architecture</p>
            <p className="text-blue-700">
              Instead of constantly polling our API for changes, webhooks push notifications to your systems
              when events happen, creating a more efficient and responsive integration.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/webhooks</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Create a new webhook endpoint.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">GET /v1/webhooks</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    List all webhook endpoints.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`GET /v1/webhooks/{webhook_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Retrieve a specific webhook endpoint.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">{`DELETE /v1/webhooks/{webhook_id}`}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Delete a webhook endpoint.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Supported Events</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Event Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">eq.assessment.completed</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Triggered when a user completes an EQ assessment.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">eq.score.updated</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Triggered when a user's EQ score is updated.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">eq.milestone.reached</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Triggered when a user reaches an EQ development milestone.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">team.analysis.completed</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Triggered when a team analysis is completed.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">emotion.threshold.exceeded</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Triggered when an emotion exceeds a configured threshold.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Creating a Webhook</h2>
          
          <p className="mb-4">
            To create a new webhook endpoint, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/webhooks</code> endpoint.
            This registers a URL to receive notifications for specified events.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Required Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">url</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    The URL to send webhook events to.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">events</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    array
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Array of event types to subscribe to.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Optional Parameters</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Parameter</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">description</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Optional description of the webhook's purpose.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">secret</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    string
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Secret used to sign webhook payloads for verification.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">filters</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    object
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Criteria for filtering which events are sent to this webhook.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <p className="mb-4">
            The response includes details about the created webhook endpoint.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "id": "whk_12345abcde",
            "url": "https://example.com/webhook/kindred",
            "events": ["eq.assessment.completed", "eq.score.updated"],
            "description": "Production webhook for EQ events",
            "secret": "whsec_6789fghij",
            "created_at": "2025-02-15T12:00:00Z",
            "status": "active"
          }`}
            </pre>
          </div>
        </div>
      );
    }

    if (activePage === 'settings') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Customization & Settings</h1>
          
          <p className="mb-4">
            The Customization & Settings API allows you to configure how Kindred AI Hub interacts with users
            and integrates with your applications. This enables you to tailor the experience to your specific
            needs and branding requirements.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Personalized Experience</p>
            <p className="text-blue-700">
              By customizing the settings, you can ensure that Kindred AI's emotional intelligence capabilities
              align perfectly with your application's user experience, tone, and branding.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Endpoints</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">GET /v1/settings</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Retrieve current settings.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">PATCH /v1/settings</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Update settings.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">POST /v1/settings/branding</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Update branding settings.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <code className="font-semibold">GET /v1/settings/privacy</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Retrieve privacy settings.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Configurable Settings</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Setting Category</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Configurable Options</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">AI Behavior</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Response tone, conversation style, coaching approach, intervention thresholds
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">User Experience</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Onboarding flow, assessment frequency, notification preferences, feedback methods
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Branding</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Colors, logos, custom terminology, white labeling options
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Privacy</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Data retention periods, anonymization options, consent requirements, sensitive data handling
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <span className="font-semibold">Integration</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    Default permissions, connection preferences, data syncing frequency
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Updating Settings</h2>
          
          <p className="mb-4">
            To update configuration settings, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">PATCH /v1/settings</code> endpoint.
            This allows you to modify various aspects of how Kindred AI Hub works.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Request Example</h3>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`PATCH /v1/settings
          Content-Type: application/json
          Authorization: Bearer sk_test_abc123

          {
            "ai_behavior": {
              "default_tone": "supportive",
              "coaching_style": "growth_oriented",
              "intervention_threshold": 0.7
            },
            "user_experience": {
              "reassessment_frequency": "quarterly",
              "notifications": {
                "milestone_reached": true,
                "assessment_reminder": true,
                "weekly_insights": false
              }
            },
            "privacy": {
              "data_retention_days": 365,
              "anonymize_team_data": true
            }
          }`}
            </pre>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Response</h3>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`{
            "id": "settings_12345abcde",
            "updated_at": "2025-02-15T12:00:00Z",
            "ai_behavior": {
              "default_tone": "supportive",
              "coaching_style": "growth_oriented",
              "intervention_threshold": 0.7
            },
            "user_experience": {
              "reassessment_frequency": "quarterly",
              "notifications": {
                "milestone_reached": true,
                "assessment_reminder": true,
                "weekly_insights": false
              }
            },
            "privacy": {
              "data_retention_days": 365,
              "anonymize_team_data": true
            }
          }`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Branding Customization</h2>
          
          <p className="mb-4">
            To update branding settings, use the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/settings/branding</code> endpoint.
            This allows you to customize visual elements and terminology for a seamless integration with your brand.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Request Example</h3>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`POST /v1/settings/branding
          Content-Type: application/json
          Authorization: Bearer sk_test_abc123

          {
            "colors": {
              "primary": "#4a6fa5",
              "secondary": "#6aa84f",
              "accent": "#e69138"
            },
            "logos": {
              "main_logo_url": "https://example.com/logo.png",
              "favicon_url": "https://example.com/favicon.ico"
            },
            "terminology": {
              "assessment": "EQ Check-in",
              "coach": "Guide",
              "insights": "Discoveries"
            },
            "white_label": true
          }`}
            </pre>
          </div>
        </div>
      );
    }

    // ======= APP-SPECIFIC APIS SECTION ========
    if (activePage === 'medchefs') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">MedChefs API</h1>
          
          <p className="mb-4">
            Coming soon. The MedChefs-specific APIs will provide specialized emotional intelligence capabilities
            for nutrition coaching and health journey support.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Under Development</p>
            <p className="text-blue-700">
              The MedChefs integration is currently in development. Check back soon for detailed documentation
              on these specialized API endpoints.
            </p>
          </div>
        </div>
      );
    }

    if (activePage === 'goleman') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Goleman AI API</h1>
          
          <p className="mb-4">
            Coming soon. The Goleman AI-specific APIs will provide specialized emotional intelligence capabilities
            for leadership development and training.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Under Development</p>
            <p className="text-blue-700">
              The Goleman AI integration is currently in development. Check back soon for detailed documentation
              on these specialized API endpoints.
            </p>
          </div>
        </div>
      );
    }

    if (activePage === 'waitingroom') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">WaitingRoom API</h1>
          
          <p className="mb-4">
            Coming soon. The WaitingRoom-specific APIs will provide specialized emotional intelligence capabilities
            for mental health support and wellness.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Under Development</p>
            <p className="text-blue-700">
              The WaitingRoom integration is currently in development. Check back soon for detailed documentation
              on these specialized API endpoints.
            </p>
          </div>
        </div>
      );
    }

    // ======= DEVELOPER TOOLS SECTION ========
    if (activePage === 'api-playground') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">API Playground</h1>
          
          <p className="mb-4">
            The API Playground is an interactive tool that allows you to test Kindred AI Hub API calls
            directly in your browser. This helps you understand how the API works and experiment with
            different parameters without writing any code.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Interactive Testing</p>
            <p className="text-blue-700">
              The playground is available in the <a href="#" className="text-purple-600 hover:text-purple-800">Kindred AI Developer Dashboard</a>.
              You'll need to sign in with your developer account to access it.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Playground Features</h2>
          
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li className="mb-2">
              <strong>Endpoint Selection</strong> - Choose from all available API endpoints
            </li>
            <li className="mb-2">
              <strong>Parameter Builder</strong> - Easily construct API requests with a user-friendly interface
            </li>
            <li className="mb-2">
              <strong>Authentication Helper</strong> - Test with your actual API keys
            </li>
            <li className="mb-2">
              <strong>Response Viewer</strong> - See formatted JSON responses with syntax highlighting
            </li>
            <li className="mb-2">
              <strong>Code Generator</strong> - Generate code snippets in multiple languages based on your test calls
            </li>
            <li className="mb-2">
              <strong>History Tracking</strong> - Save and revisit previous API calls
            </li>
          </ul>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2">API Playground Preview</h3>
            <p className="text-gray-600 mb-4">The actual playground is available in the Developer Dashboard. Here's what you can expect to see:</p>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="bg-gray-800 p-2 text-white text-sm font-medium">
                API Playground - Emotion Analysis Endpoint
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-300">
                <div className="p-4 bg-white">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Request</h4>
                  <div className="mb-3">
                    <label className="block text-xs text-gray-600 mb-1">Endpoint</label>
                    <div className="flex">
                      <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-l-md border border-gray-300 text-xs">POST</span>
                      <input type="text" value="/v1/analysis/sentiment" readOnly className="flex-1 px-2 py-1 text-xs border border-l-0 border-gray-300 rounded-r-md bg-gray-50" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block text-xs text-gray-600 mb-1">Parameters</label>
                    <div className="bg-gray-50 p-2 rounded-md border border-gray-300 text-xs font-mono">
                      {"{"}
                      <br />
                      &nbsp;&nbsp;"text": "I'm feeling really proud of what we accomplished today, despite the challenges.",
                      <br />
                      &nbsp;&nbsp;"context": "work_achievement"
                      <br />
                      {"}"}
                    </div>
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs py-1 px-3 rounded">
                    Send Request
                  </button>
                </div>
                <div className="p-4 bg-gray-50">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Response</h4>
                  <div className="bg-gray-800 p-2 rounded-md text-xs font-mono text-green-400 overflow-auto h-40">
                    {"{"}
                    <br />
                    &nbsp;&nbsp;"primary_emotion": "pride",
                    <br />
                    &nbsp;&nbsp;"emotion_scores": {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"joy": 0.7,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"pride": 0.85,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"satisfaction": 0.65,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"relief": 0.4,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"frustration": 0.2
                    <br />
                    &nbsp;&nbsp;{"}"},
                    <br />
                    &nbsp;&nbsp;"sentiment": 0.75,
                    <br />
                    &nbsp;&nbsp;"analysis": {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"mixed_emotions": true,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"emotional_complexity": 0.5,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"key_phrases": ["feeling proud", "accomplished", "despite challenges"],
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"interpretation": "Strong positive emotions of pride and accomplishment with acknowledgment of difficulties overcome."
                    <br />
                    &nbsp;&nbsp;{"}"}
                    <br />
                    {"}"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activePage === 'sdks') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">SDKs & Client Libraries</h1>
          
          <p className="mb-4">
            Kindred AI Hub provides Software Development Kits (SDKs) in multiple programming languages to
            simplify integration with your applications. These SDKs handle authentication, request formatting,
            error handling, and other common tasks, letting you focus on building your application.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Language-Native Integration</p>
            <p className="text-blue-700">
              Our SDKs provide a native experience in each supported language, following language conventions
              and best practices to ensure a seamless development experience.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available SDKs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Python</h3>
              <p className="text-gray-600 mb-3">Ideal for data science, backend services, and script automation.</p>
              
              <div className="bg-gray-800 p-3 rounded-md text-sm mb-3">
                <code className="text-gray-100">pip install kindred-ai</code>
              </div>
              
              <div className="flex justify-between">
                <a href="#" className="text-purple-600 hover:text-purple-800 text-sm">Documentation</a>
                <a href="#" className="text-purple-600 hover:text-purple-800 text-sm">GitHub</a>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">JavaScript</h3>
              <p className="text-gray-600 mb-3">For web applications, Node.js backends, and browser integrations.</p>
              
              <div className="bg-gray-800 p-3 rounded-md text-sm mb-3">
                <code className="text-gray-100">npm install @kindredai/sdk</code>
              </div>
              
              <div className="flex justify-between">
                <a href="#" className="text-purple-600 hover:text-purple-800 text-sm">Documentation</a>
                <a href="#" className="text-purple-600 hover:text-purple-800 text-sm">GitHub</a>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Java</h3>
              <p className="text-gray-600 mb-3">For enterprise applications, Android development, and Spring backends.</p>
              
              <div className="bg-gray-800 p-3 rounded-md text-sm mb-3">
                <code className="text-gray-100">
                  &lt;dependency&gt;<br/>
                  &nbsp;&nbsp;&lt;groupId&gt;com.kindredai&lt;/groupId&gt;<br/>
                  &nbsp;&nbsp;&lt;artifactId&gt;kindredai-sdk&lt;/artifactId&gt;<br/>
                  &nbsp;&nbsp;&lt;version&gt;1.0.0&lt;/version&gt;<br/>
                  &lt;/dependency&gt;
                </code>
              </div>
              
              <div className="flex justify-between">
                <a href="#" className="text-purple-600 hover:text-purple-800 text-sm">Documentation</a>
                <a href="#" className="text-purple-600 hover:text-purple-800 text-sm">GitHub</a>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Ruby</h3>
              <p className="text-gray-600 mb-3">For Ruby on Rails applications and script automation.</p>
              
              <div className="bg-gray-800 p-3 rounded-md text-sm mb-3">
                <code className="text-gray-100">gem install kindred-ai</code>
              </div>
              
              <div className="flex justify-between">
                <a href="#" className="text-purple-600 hover:text-purple-800 text-sm">Documentation</a>
                <a href="#" className="text-purple-600 hover:text-purple-800 text-sm">GitHub</a>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Coming Soon</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
              <h3 className="text-md font-medium text-gray-800 mb-1">PHP</h3>
              <p className="text-gray-600 text-sm">Expected Q2 2025</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
              <h3 className="text-md font-medium text-gray-800 mb-1">Go</h3>
              <p className="text-gray-600 text-sm">Expected Q2 2025</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
              <h3 className="text-md font-medium text-gray-800 mb-1">.NET</h3>
              <p className="text-gray-600 text-sm">Expected Q3 2025</p>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">SDK Example: Python</h2>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`import kindredai

          # Initialize the client with your API key
          client = kindredai.Client(api_key="sk_test_abc123")

          # Analyze text for emotional content
          analysis = client.emotion.analyze(
              text="I'm feeling really excited about our new project, but also a bit nervous about the timeline.",
              context="work_project"
          )

          # Print the primary emotion and sentiment
          print(f"Primary emotion: {analysis.primary_emotion}")
          print(f"Sentiment score: {analysis.sentiment}")

          # Access emotion scores
          for emotion, score in analysis.emotion_scores.items():
              print(f"{emotion}: {score:.2f}")

          # Create an EQ assessment for a user
          assessment = client.eq.create_assessment(
              user_id="user_12345",
              assessment_type="standard",
              focus_areas=["self_awareness", "empathy"]
          )

          # Print assessment details
          print(f"Assessment ID: {assessment.id}")
          print(f"Number of questions: {assessment.total_questions}")
          print(f"Estimated time: {assessment.estimated_time_minutes} minutes")`}
            </pre>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">SDK Example: JavaScript</h2>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <pre className="text-sm text-gray-800">
          {`import { KindredAI } from '@kindredai/sdk';

          // Initialize the client with your API key
          const kindred = new KindredAI('sk_test_abc123');

          // Analyze text for emotional content
          async function analyzeEmotion() {
            try {
              const analysis = await kindred.emotion.analyze({
                text: "I'm feeling really excited about our new project, but also a bit nervous about the timeline.",
                context: "work_project"
              });
              
              // Print the primary emotion and sentiment
              console.log(\`Primary emotion: \${analysis.primary_emotion}\`);
              console.log(\`Sentiment score: \${analysis.sentiment}\`);
              
              // Access emotion scores
              Object.entries(analysis.emotion_scores).forEach(([emotion, score]) => {
                console.log(\`\${emotion}: \${score.toFixed(2)}\`);
              });
              
            } catch (error) {
              console.error('Error analyzing emotion:', error);
            }
          }

          // Create an EQ assessment for a user
          async function createAssessment() {
            try {
              const assessment = await kindred.eq.createAssessment({
                user_id: "user_12345",
                assessment_type: "standard",
                focus_areas: ["self_awareness", "empathy"]
              });
              
              // Print assessment details
              console.log(\`Assessment ID: \${assessment.id}\`);
              console.log(\`Number of questions: \${assessment.total_questions}\`);
              console.log(\`Estimated time: \${assessment.estimated_time_minutes} minutes\`);
              
            } catch (error) {
              console.error('Error creating assessment:', error);
            }
          }

          analyzeEmotion();
          createAssessment();`}
            </pre>
          </div>
        </div>
      );
    }

    if (activePage === 'code-examples') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Code Examples</h1>
          
          <p className="mb-4">
            These code examples demonstrate how to use the Kindred AI Hub API for common tasks across different
            programming languages. You can use these examples as a starting point for your own implementations.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Learning Resources</p>
            <p className="text-blue-700">
              For more comprehensive examples and tutorials, check out our 
              <a href="#" className="text-purple-600 hover:text-purple-800"> GitHub repository</a> and 
              <a href="#" className="text-purple-600 hover:text-purple-800"> developer blog</a>.
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Authenticating with the API</h2>
          
          <div className="mb-6">
            <div className="flex space-x-1 border-b">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 focus:outline-none">Python</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 focus:outline-none">JavaScript</button>
              <button className="px-4 py-2 text-sm font-medium text-purple-600 border-b-2 border-purple-600 focus:outline-none">cURL</button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-b-md">
              <pre className="text-sm text-gray-800">
            {`# Make an authenticated request to the API
              curl -X GET \
              https://api.kindredai.com/v1/eq/assessment/user/user_12345 \
              -H "Authorization: Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc"

            # Using Basic Auth alternative
            curl -X GET \
              https://api.kindredai.com/v1/eq/assessment/user/user_12345 \
              -u sk_test_4eC39HqLyjWDarjtT1zdp7dc:
            `}
              </pre>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Analyzing Text for Emotions</h2>
          
          <div className="mb-6">
            <div className="flex space-x-1 border-b">
              <button className="px-4 py-2 text-sm font-medium text-purple-600 border-b-2 border-purple-600 focus:outline-none">Python</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 focus:outline-none">JavaScript</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 focus:outline-none">cURL</button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-b-md">
              <pre className="text-sm text-gray-800">
            {`import requests

            api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"
            api_url = "https://api.kindredai.com/v1/analysis/sentiment"

            # Message to analyze
            text = "I'm feeling really frustrated with my progress, but I'm trying to stay positive."

            # Make the API request
            response = requests.post(
                api_url,
                headers={"Authorization": f"Bearer {api_key}"},
                json={
                    "text": text,
                    "context": "health_journey"
                }
            )

            # Process the response
            if response.status_code == 200:
                analysis = response.json()
                print(f"Primary emotion: {analysis['primary_emotion']}")
                print(f"Sentiment score: {analysis['sentiment']}")
                print(f"Emotion scores:")
                for emotion, score in analysis['emotion_scores'].items():
                    print(f"  {emotion}: {score}")
                print(f"Interpretation: {analysis['analysis']['interpretation']}")
            else:
                print(f"Error: {response.status_code}")
                print(response.text)`}
              </pre>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Creating and Submitting an EQ Assessment</h2>
          
          <div className="mb-6">
            <div className="flex space-x-1 border-b">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 focus:outline-none">Python</button>
              <button className="px-4 py-2 text-sm font-medium text-purple-600 border-b-2 border-purple-600 focus:outline-none">JavaScript</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 focus:outline-none">cURL</button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-b-md">
              <pre className="text-sm text-gray-800">
            {`// Using Node.js with Axios
            const axios = require('axios');

            const api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';
            const baseUrl = 'https://api.kindredai.com/v1';

            // Step 1: Create a new assessment
            async function createAndSubmitAssessment() {
              try {
                // Create a new assessment
                const createResponse = await axios.post(
                  \`\${baseUrl}/eq/assessment/create\`,
                  {
                    user_id: 'user_12345',
                    assessment_type: 'standard',
                    focus_areas: ['self_awareness', 'empathy']
                  },
                  {
                    headers: { 'Authorization': \`Bearer \${api_key}\` }
                  }
                );
                
                const assessment = createResponse.data;
                console.log(\`Created assessment: \${assessment.assessment_id}\`);
                console.log(\`Number of questions: \${assessment.total_questions}\`);
                
                // In a real application, you would present these questions to the user
                // and collect their responses. Here we're simulating responses.
                const simulatedResponses = assessment.questions.map(question => {
                  // Simulating a response (in reality, this would come from the user)
                  const responseValue = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'][
                    Math.floor(Math.random() * 5)
                  ];
                  
                  return {
                    question_id: question.id,
                    response: responseValue
                  };
                });
                
                // Step 2: Submit the assessment responses
                const submitResponse = await axios.post(
                  \`\${baseUrl}/eq/assessment/submit\`,
                  {
                    assessment_id: assessment.assessment_id,
                    responses: simulatedResponses
                  },
                  {
                    headers: { 'Authorization': \`Bearer \${api_key}\` }
                  }
                );
                
                const results = submitResponse.data;
                console.log('Assessment Results:');
                console.log(\`Overall Score: \${results.results.overall_score}\`);
                console.log('Domain Scores:');
                Object.entries(results.results.domain_scores).forEach(([domain, score]) => {
                  console.log(\`  \${domain}: \${score}\`);
                });
                console.log('Strengths:');
                results.results.strengths.forEach(strength => {
                  console.log(\`  \${strength.domain}: \${strength.description}\`);
                });
                
              } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
              }
            }

            createAndSubmitAssessment();`}
              </pre>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Tracking Emotions Over Time</h2>
          
          <div className="mb-6">
            <div className="flex space-x-1 border-b">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 focus:outline-none">Python</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 focus:outline-none">JavaScript</button>
              <button className="px-4 py-2 text-sm font-medium text-purple-600 border-b-2 border-purple-600 focus:outline-none">cURL</button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-b-md">
              <pre className="text-sm text-gray-800">
            {`# Step 1: Log an emotion
            curl -X POST \
              https://api.kindredai.com/v1/eq/tracking/log \
              -H "Authorization: Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc" \
              -H "Content-Type: application/json" \
              -d '{
                "user_id": "user_12345",
                "emotion": "anxiety",
                "intensity": 7,
                "context": "work presentation",
                "trigger": "public speaking",
                "response": "used deep breathing technique"
              }'

            # Step 2: Retrieve emotion trends for a user
            curl -X GET \
              "https://api.kindredai.com/v1/eq/tracking/trends/user_12345?start_date=2025-01-15&end_date=2025-02-15&granularity=day" \
              -H "Authorization: Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc"`}
              </pre>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Setting Up a Webhook</h2>
          
          <div className="mb-6">
            <div className="flex space-x-1 border-b">
              <button className="px-4 py-2 text-sm font-medium text-purple-600 border-b-2 border-purple-600 focus:outline-none">Python</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 focus:outline-none">JavaScript</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 focus:outline-none">cURL</button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-b-md">
              <pre className="text-sm text-gray-800">
            {`import requests
            import hashlib
            import hmac
            import json
            from flask import Flask, request, jsonify

            app = Flask(__name__)

            api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"
            webhook_secret = "whsec_6789fghij"  # Set this to your webhook secret

            # Step 1: Create a webhook endpoint
            def create_webhook():
                api_url = "https://api.kindredai.com/v1/webhooks"
                
                response = requests.post(
                    api_url,
                    headers={"Authorization": f"Bearer {api_key}"},
                    json={
                        "url": "https://example.com/webhook/kindred",
                        "events": ["eq.assessment.completed", "eq.score.updated"],
                        "description": "Production webhook for EQ events",
                        "secret": webhook_secret
                    }
                )
                
                if response.status_code == 200:
                    webhook = response.json()
                    print(f"Created webhook: {webhook['id']}")
                else:
                    print(f"Error: {response.status_code}")
                    print(response.text)

            # Step 2: Handle webhook events
            @app.route('/webhook/kindred', methods=['POST'])
            def handle_webhook():
                payload = request.json
                signature = request.headers.get('X-Kindred-Signature')
                
                # Verify webhook signature
                if not is_valid_signature(request.data, signature):
                    return jsonify({"error": "Invalid signature"}), 400
                
                # Process the event
                event_type = payload.get('type')
                
                if event_type == 'eq.assessment.completed':
                    user_id = payload.get('data').get('user_id')
                    assessment_id = payload.get('data').get('assessment_id')
                    eq_score = payload.get('data').get('results').get('overall_score')
                    
                    print(f"User {user_id} completed assessment {assessment_id} with score {eq_score}")
                    # Process the assessment completion...
                    
                elif event_type == 'eq.score.updated':
                    user_id = payload.get('data').get('user_id')
                    new_score = payload.get('data').get('new_score')
                    old_score = payload.get('data').get('old_score')
                    
                    print(f"User {user_id} EQ score updated from {old_score} to {new_score}")
                    # Process the score update...
                
                return jsonify({"status": "success"}), 200

            def is_valid_signature(payload, signature):
                # Verify that the request came from Kindred AI Hub
                computed_signature = hmac.new(
                    webhook_secret.encode('utf-8'),
                    payload,
                    hashlib.sha256
                ).hexdigest()
                
                return hmac.compare_digest(computed_signature, signature)

            if __name__ == '__main__':
                # First create the webhook (only need to do this once)
                # create_webhook()
                
                # Then start the server to handle incoming webhook events
                app.run(port=3000)`}
              </pre>
            </div>
          </div>
        </div>
      );
    }

    if (activePage === 'changelog') {
      return (
        <div className="py-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Changelog</h1>
          
          <p className="mb-4">
            The changelog tracks all notable changes to the Kindred AI Hub API. We follow 
            <a href="https://semver.org/" className="text-purple-600 hover:text-purple-800"> Semantic Versioning</a> for 
            our API versions and provide detailed information about new features, improvements, and bug fixes.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Stay Up to Date</p>
            <p className="text-blue-700">
              Subscribe to our <a href="#" className="text-purple-600 hover:text-purple-800">developer newsletter</a> to 
              receive notifications about API updates, new features, and changes.
            </p>
          </div>
          
          <div className="border-l-2 border-gray-200 pl-5 py-2 mb-8">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                <span className="px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-2">v1.3.0</span>
                February 1, 2025
              </h2>
              
              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                <span className="text-blue-600 mr-1">✨</span> New Features
              </h3>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li className="mb-1">Added new <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">team.analysis.completed</code> webhook event</li>
                <li className="mb-1">Introduced batch processing for sentiment analysis with the new <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">POST /v1/analysis/sentiment/batch</code> endpoint</li>
                <li className="mb-1">Added support for custom branding in embedded dashboards</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                <span className="text-purple-600 mr-1">🛠️</span> Improvements
              </h3>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li className="mb-1">Enhanced emotion detection with improved accuracy for mixed emotions</li>
                <li className="mb-1">Expanded Python SDK with new helper methods for common tasks</li>
                <li className="mb-1">Improved performance for EQ assessment processing</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                <span className="text-red-600 mr-1">🐛</span> Bug Fixes
              </h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li className="mb-1">Fixed an issue with webhook signature verification</li>
                <li className="mb-1">Corrected timezone handling in emotion tracking endpoints</li>
                <li className="mb-1">Resolved occasional 500 errors when submitting large assessment responses</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                <span className="px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-2">v1.2.0</span>
                January 15, 2025
              </h2>
              
              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                <span className="text-blue-600 mr-1">✨</span> New Features
              </h3>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li className="mb-1">Added team analysis capabilities with the new <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">/v1/eq/team</code> endpoints</li>
                <li className="mb-1">Introduced the JavaScript SDK</li>
                <li className="mb-1">Added support for webhook subscriptions</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                <span className="text-purple-600 mr-1">🛠️</span> Improvements
              </h3>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li className="mb-1">Enhanced performance for emotion analysis endpoints</li>
                <li className="mb-1">Improved error messages with more specific guidance</li>
                <li className="mb-1">Added additional documentation and examples</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                <span className="text-red-600 mr-1">🐛</span> Bug Fixes
              </h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li className="mb-1">Fixed authentication issues with certain API key formats</li>
                <li className="mb-1">Corrected response formatting for EQ assessment results</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                <span className="px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-2">v1.1.0</span>
                December 5, 2024
              </h2>
              
              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                <span className="text-blue-600 mr-1">✨</span> New Features
              </h3>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li className="mb-1">Added emotion tracking endpoints</li>
                <li className="mb-1">Introduced the Python SDK</li>
                <li className="mb-1">Added support for custom assessment types</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                <span className="text-purple-600 mr-1">🛠️</span> Improvements
              </h3>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li className="mb-1">Enhanced the sentiment analysis algorithm</li>
                <li className="mb-1">Improved API response times</li>
                <li className="mb-1">Added more detailed documentation</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                <span className="text-red-600 mr-1">🐛</span> Bug Fixes
              </h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li className="mb-1">Fixed issue with EQ assessment scoring</li>
                <li className="mb-1">Resolved authentication edge cases</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    // Default case if no specific page is selected
    return (
      <div className="py-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to the Kindred AI Hub Documentation</h1>
          <p className="text-gray-600 mb-6">Select a topic from the sidebar to get started</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <button 
              onClick={() => setActivePage('introduction')}
              className="p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <h2 className="text-lg font-medium text-gray-800 mb-2">Introduction</h2>
              <p className="text-gray-600 text-sm">Learn about the Kindred AI Hub and how it works</p>
            </button>
            
            <button 
              onClick={() => setActivePage('conversation-api')}
              className="p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <h2 className="text-lg font-medium text-gray-800 mb-2">AI Assistant</h2>
              <p className="text-gray-600 text-sm">Explore the conversation and sentiment analysis APIs</p>
            </button>
            
            <button 
              onClick={() => setActivePage('eq-assessment')}
              className="p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <h2 className="text-lg font-medium text-gray-800 mb-2">EQ Assessment</h2>
              <p className="text-gray-600 text-sm">Discover how to measure emotional intelligence</p>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // This function dynamically renders code examples in the right panel
  const renderCodeExample = () => {
    // ======= ABOUT THE API SECTION ========
    if (activePage === 'introduction') {
      return (
        <div>
          <div className="bg-gray-800 rounded-t-md p-3">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-100">API VERSION HEADER</h3>
              </div>
              <button className="text-gray-400 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-700"></div>
          
          <div className="bg-gray-800 p-3 text-sm font-mono">
            <div className="text-gray-100">$ curl https://api.kindredai.com/v1/introduction \</div>
            <div className="text-gray-100">  -H "Authorization: Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc"</div>
          </div>
          
          <div className="mt-6">
            <div className="bg-gray-800 rounded-t-md p-3">
              <div className="flex items-center">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-100">RESPONSE</h3>
                </div>
                <button className="text-gray-400 hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="border-t border-gray-700"></div>
            
            <div className="bg-gray-800 p-3 rounded-b-md text-sm font-mono">
              <div className="text-gray-100">{"{"}</div>
              <div className="text-gray-100">  "name": "Kindred AI Hub",</div>
              <div className="text-gray-100">  "version": "1.3.0",</div>
              <div className="text-gray-100">  "description": "API platform for emotional intelligence integration",</div>
              <div className="text-gray-100">  "documentation_url": "https://docs.kindredai.com",</div>
              <div className="text-gray-100">  "features": [</div>
              <div className="text-gray-100">    "sentiment_analysis",</div>
              <div className="text-gray-100">    "eq_assessment",</div>
              <div className="text-gray-100">    "emotion_tracking",</div>
              <div className="text-gray-100">    "team_insights"</div>
              <div className="text-gray-100">  ],</div>
              <div className="text-gray-100">  "status": "operational"</div>
              <div className="text-gray-100">{"}"}</div>
            </div>
          </div>
        </div>
      );
    }
    
    if (activePage === 'authentication') {
      return (
        <div>
          <div className="bg-gray-800 rounded-t-md p-3">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-100">AUTHENTICATED REQUEST</h3>
              </div>
              <button className="text-gray-400 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-700"></div>
          
          <div className="bg-gray-800 p-3 text-sm font-mono">
            <div className="text-gray-100">$ curl \</div>
            <div className="text-gray-100">  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \</div>
            <div className="text-gray-100">  https://api.kindredai.com/v1/emotion/analyze</div>
          </div>
          
          <div className="bg-gray-700 p-4 rounded-b-md">
            <h3 className="text-sm font-medium text-gray-100 mb-3">YOUR API KEY</h3>
            <p className="text-gray-300 text-sm mb-4">
              A sample test API key is included in all the examples here, so you can test any example right away.
            </p>
            <p className="text-gray-300 text-sm">
              To test requests using your account, replace the sample API key with your actual API key or sign in.
            </p>
          </div>
          
          <div className="mt-6">
            <div className="bg-gray-800 rounded-t-md p-3">
              <div className="flex items-center">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-100">RESPONSE</h3>
                </div>
                <button className="text-gray-400 hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="border-t border-gray-700"></div>
            
            <div className="bg-gray-800 p-3 rounded-b-md text-sm font-mono">
              <div className="text-gray-100">{"{"}</div>
              <div className="text-gray-100">  "success": true,</div>
              <div className="text-gray-100">  "status": "authenticated",</div>
              <div className="text-gray-100">  "message": "API key is valid"</div>
              <div className="text-gray-100">{"}"}</div>
            </div>
          </div>
        </div>
      );
    }

    // ======= AI ASSISTANT SECTION ========
    if (activePage === 'conversation-api') {
      return (
        <div>
          <div className="bg-gray-800 rounded-t-md p-3">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-100">CONVERSATION API</h3>
              </div>
              <button className="text-gray-400 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-700"></div>
          
          <div className="bg-gray-800 p-3 text-sm font-mono">
            <div className="text-gray-100">$ curl -X POST https://api.kindredai.com/v1/conversation/send \</div>
            <div className="text-gray-100">  -H "Authorization: Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc" \</div>
            <div className="text-gray-100">  -H "Content-Type: application/json" \</div>
            <div className="text-gray-100">  -d "message": "How can I improve my leadership skills?"</div>
          </div>
          
          <div className="mt-6">
            <div className="bg-gray-800 rounded-t-md p-3">
              <div className="flex items-center">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-100">RESPONSE</h3>
                </div>
                <button className="text-gray-400 hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="border-t border-gray-700"></div>
            
            <div className="bg-gray-800 p-3 rounded-b-md text-sm font-mono">
              <div className="text-gray-100">{"{"}</div>
              <div className="text-gray-100">  "conversation_id": "conv_12345abcde",</div>
              <div className="text-gray-100">  "message": "How can I improve my leadership skills?",</div>
              <div className="text-gray-100">  "response": "Improving emotional intelligence in leadership starts with self-awareness. Try to regularly reflect on your emotions and how they impact your decisions and interactions with team members. Additionally, practice active listening, seek feedback from your team, and work on empathy by trying to understand others' perspectives. Leadership development is a journey that requires consistent practice and openness to growth.",</div>
              <div className="text-gray-100">  "emotional_analysis": </div>
              <div className="text-gray-100">    "query_intent": "personal_growth",</div>
              <div className="text-gray-100">    "sentiment": "neutral",</div>
              <div className="text-gray-100">    "detected_emotions": ["curiosity", "ambition"]</div>
              <div className="text-gray-100">  </div>
              <div className="text-gray-100">{"}"}</div>
            </div>
          </div>
        </div>
      );
    }
    

    // Add more code examples for other sections as needed...
    
    // Default case if no specific code example is available
    return (
      <div className="p-4 bg-gray-100 text-gray-500 text-center rounded-md">
        <p>Select a documentation section to see code examples.</p>
      </div>
    );
  }
  
  
  // Sidebar navigation component
  const Sidebar = ({ activePage, setActivePage }) => (
    <div className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto sticky top-0">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">Kindred AI API</h1>
        <p className="text-sm text-gray-600">Documentation</p>
      </div>
      
      {/* About the API section */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-md font-semibold text-gray-700 mb-2">About the API</h2>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setActivePage('introduction')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'introduction' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Introduction
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('authentication')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'authentication' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Authentication
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('errors')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'errors' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Errors & Responses
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('versioning')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'versioning' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Versioning
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('rate-limits')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'rate-limits' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Rate Limits
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('request-ids')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'request-ids' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Request IDs & Metadata
            </button>
          </li>
        </ul>
      </div>
      
      {/* AI Assistant section */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-md font-semibold text-gray-700 mb-2">AI Assistant</h2>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setActivePage('conversation-api')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'conversation-api' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Conversation API
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('user-context')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'user-context' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              User Context
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('sentiment-analysis')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'sentiment-analysis' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Sentiment Analysis
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('response-customization')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'response-customization' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Response Customization
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('real-time-coaching')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'real-time-coaching' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Real-Time Coaching
            </button>
          </li>
        </ul>
      </div>
      
      {/* Emotional Intelligence section */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Emotional Intelligence</h2>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setActivePage('eq-assessment')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'eq-assessment' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              EQ Assessment
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('self-awareness')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'self-awareness' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Self-Awareness & Management
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('social-awareness')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'social-awareness' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Social Awareness & Relationships
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('emotion-tracking')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'emotion-tracking' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Emotion Tracking
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('team-leadership')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'team-leadership' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Team & Leadership Insights
            </button>
          </li>
        </ul>
      </div>
      
      {/* Core Features section */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Core Features</h2>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setActivePage('data-dashboards')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'data-dashboards' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Data Dashboards
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('integrations')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'integrations' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Integrations
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('webhooks')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'webhooks' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Webhooks
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('settings')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'settings' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Customization & Settings
            </button>
          </li>
        </ul>
      </div>
      
      {/* App-Specific APIs section */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-md font-semibold text-gray-700 mb-2">App-Specific APIs</h2>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setActivePage('goleman')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'goleman' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Goleman Consulting Group
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('waitingroom')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'waitingroom' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Waiting Room
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('medchefs')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'medchefs' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              MedChefs
            </button>
          </li>
        </ul>
      </div>
      
      {/* Developer Tools section */}
      <div className="p-4">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Developer Tools</h2>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setActivePage('api-playground')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'api-playground' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              API Playground
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('sdks')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'sdks' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              SDKs & Client Libraries
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('code-examples')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'code-examples' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Code Examples
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('changelog')}
              className={`w-full text-left px-2 py-1 text-sm rounded ${activePage === 'changelog' ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Changelog
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
  
  // Main component structure
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="flex">
          <div className="flex-1 p-6 border-r border-gray-200">
            {renderContent()}
          </div>
          
          <div className="w-96 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Code Examples</h2>
            {renderCodeExample()}
          </div>
        </div>
      </div>
    </div>
  );
};


export default StripeStyleDocs;