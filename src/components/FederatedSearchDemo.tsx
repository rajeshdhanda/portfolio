import React, { useState, useEffect, useRef } from 'react';

const searchQueries = ['medic', 'ship', 'refund', 'pass', 'order'];

const autocompleteData = {
  'medic': ['medicare', 'medicaid', 'medicine', 'medical'],
  'med': ['medicare', 'medicaid', 'medicine', 'medical'],
  'me': ['medicare', 'medicaid', 'medicine', 'medical'],
  'ship': ['shipping', 'shipment', 'shipped'],
  'shi': ['shipping', 'shipment', 'shipped'],
  'sh': ['shipping', 'shipment', 'shipped'],
  'refund': ['refunds', 'refunded', 'refunding'],
  'refu': ['refund', 'refunds', 'refunded'],
  'ref': ['refund', 'refunds', 'refunded'],
  'pass': ['password', 'passwords', 'passport'],
  'pas': ['password', 'passwords', 'passport'],
  'pa': ['password', 'passwords', 'passport'],
  'order': ['orders', 'ordering', 'ordered'],
  'ord': ['order', 'orders', 'ordering'],
  'or': ['order', 'orders', 'ordering']
};

const suggestionData = {
  'medic': [
    { title: 'medical insurance help', href: 'https://help.example.com/medical-insurance' },
    { title: 'medicare enrollment guide', href: 'https://help.example.com/medicare-enrollment' },
    { title: 'medicaid eligibility check', href: 'https://help.example.com/medicaid-eligibility' }
  ],
  'med': [
    { title: 'medical insurance help', href: 'https://help.example.com/medical-insurance' },
    { title: 'medicare enrollment guide', href: 'https://help.example.com/medicare-enrollment' },
    { title: 'medicaid eligibility check', href: 'https://help.example.com/medicaid-eligibility' }
  ],
  'me': [
    { title: 'medical insurance help', href: 'https://help.example.com/medical-insurance' },
    { title: 'medicare enrollment guide', href: 'https://help.example.com/medicare-enrollment' },
    { title: 'medicaid eligibility check', href: 'https://help.example.com/medicaid-eligibility' }
  ],
  'ship': [
    { title: 'shipping policy and rates', href: 'https://help.example.com/shipping-policy' },
    { title: 'shipment tracking guide', href: 'https://help.example.com/shipment-tracking' },
    { title: 'shipping to international locations', href: 'https://help.example.com/international-shipping' }
  ],
  'shi': [
    { title: 'shipping policy and rates', href: 'https://help.example.com/shipping-policy' },
    { title: 'shipment tracking guide', href: 'https://help.example.com/shipment-tracking' },
    { title: 'shipping to international locations', href: 'https://help.example.com/international-shipping' }
  ],
  'sh': [
    { title: 'shipping policy and rates', href: 'https://help.example.com/shipping-policy' },
    { title: 'shipment tracking guide', href: 'https://help.example.com/shipment-tracking' },
    { title: 'shipping to international locations', href: 'https://help.example.com/international-shipping' }
  ],
  'refund': [
    { title: 'refund policy overview', href: 'https://help.example.com/refund-policy' },
    { title: 'how to request refunds', href: 'https://help.example.com/request-refunds' },
    { title: 'refund status checker', href: 'https://help.example.com/refund-status' }
  ],
  'refu': [
    { title: 'refund policy overview', href: 'https://help.example.com/refund-policy' },
    { title: 'how to request refunds', href: 'https://help.example.com/request-refunds' },
    { title: 'refund status checker', href: 'https://help.example.com/refund-status' }
  ],
  'ref': [
    { title: 'refund policy overview', href: 'https://help.example.com/refund-policy' },
    { title: 'how to request refunds', href: 'https://help.example.com/request-refunds' },
    { title: 'refund status checker', href: 'https://help.example.com/refund-status' }
  ],
  'pass': [
    { title: 'password reset instructions', href: 'https://help.example.com/password-reset' },
    { title: 'password security tips', href: 'https://help.example.com/password-security' },
    { title: 'passport renewal process', href: 'https://help.example.com/passport-renewal' }
  ],
  'pas': [
    { title: 'password reset instructions', href: 'https://help.example.com/password-reset' },
    { title: 'password security tips', href: 'https://help.example.com/password-security' },
    { title: 'passport renewal process', href: 'https://help.example.com/passport-renewal' }
  ],
  'pa': [
    { title: 'password reset instructions', href: 'https://help.example.com/password-reset' },
    { title: 'password security tips', href: 'https://help.example.com/password-security' },
    { title: 'passport renewal process', href: 'https://help.example.com/passport-renewal' }
  ],
  'order': [
    { title: 'order tracking and status', href: 'https://help.example.com/order-tracking' },
    { title: 'order history and receipts', href: 'https://help.example.com/order-history' },
    { title: 'order cancellation guide', href: 'https://help.example.com/order-cancellation' }
  ],
  'ord': [
    { title: 'order tracking and status', href: 'https://help.example.com/order-tracking' },
    { title: 'order history and receipts', href: 'https://help.example.com/order-history' },
    { title: 'order cancellation guide', href: 'https://help.example.com/order-cancellation' }
  ],
  'or': [
    { title: 'order tracking and status', href: 'https://help.example.com/order-tracking' },
    { title: 'order history and receipts', href: 'https://help.example.com/order-history' },
    { title: 'order cancellation guide', href: 'https://help.example.com/order-cancellation' }
  ]
};

const searchResults = {
  'medic': [
    {
      title: 'Medicare Plans & Coverage Options',
      description: 'Complete guide to Medicare plans, enrollment periods, and coverage options for healthcare benefits.',
      url: 'https://help.example.com/medicare-plans'
    },
    {
      title: 'Medicaid Eligibility & Application Process',
      description: 'Learn about Medicaid eligibility requirements and how to apply for healthcare assistance programs.',
      url: 'https://help.example.com/medicaid-eligibility'
    },
    {
      title: 'Medical Insurance Claims & Reimbursement',
      description: 'How to file medical insurance claims and track reimbursement status for your healthcare expenses.',
      url: 'https://help.example.com/medical-claims'
    }
  ],
  'ship': [
    {
      title: 'Shipping Rates & Delivery Options',
      description: 'View shipping costs, delivery timeframes, and available shipping methods for your orders.',
      url: 'https://help.example.com/shipping-rates'
    },
    {
      title: 'Shipment Tracking & Status Updates',
      description: 'Track your packages in real-time and receive notifications about delivery status and estimated arrival.',
      url: 'https://help.example.com/track-shipment'
    },
    {
      title: 'International Shipping & Customs',
      description: 'Information about international shipping policies, customs duties, and delivery restrictions by country.',
      url: 'https://help.example.com/international-shipping'
    }
  ],
  'refund': [
    {
      title: 'Refund Policy - Returns & Exchanges',
      description: 'Our complete refund policy including return timeframes, condition requirements, and refund processing times.',
      url: 'https://help.example.com/refund-policy'
    },
    {
      title: 'How to Request a Refund - Step by Step Guide',
      description: 'Easy step-by-step instructions on how to request a refund for your purchase through our online portal.',
      url: 'https://help.example.com/request-refund'
    },
    {
      title: 'Refund Status Checker - Track Your Return',
      description: 'Check the status of your refund request and see when you can expect to receive your money back.',
      url: 'https://help.example.com/refund-status'
    }
  ],
  'pass': [
    {
      title: 'Password Reset & Account Recovery',
      description: 'Step-by-step instructions to reset your password and recover access to your account securely.',
      url: 'https://help.example.com/password-reset'
    },
    {
      title: 'Password Security Best Practices',
      description: 'Learn how to create strong passwords and enable two-factor authentication for better account security.',
      url: 'https://help.example.com/password-security'
    },
    {
      title: 'Passport Services & Documentation',
      description: 'Information about passport applications, renewals, and required documentation for travel.',
      url: 'https://help.example.com/passport-services'
    }
  ],
  'order': [
    {
      title: 'Track Your Order - Real-time Status Updates',
      description: 'Check your order status, tracking information, and estimated delivery date using your order number.',
      url: 'https://help.example.com/track-order'
    },
    {
      title: 'Order History & Previous Purchases',
      description: 'View your complete order history, reorder previous items, and download invoices from your account.',
      url: 'https://help.example.com/order-history'
    },
    {
      title: 'Cancel or Modify Your Order',
      description: 'Learn how to cancel or make changes to your order before it ships. Time-sensitive modifications allowed.',
      url: 'https://help.example.com/modify-order'
    }
  ]
};

function GoogleLikeSearchDemo() {
  const [currentQuery, setCurrentQuery] = useState('');
  const [searchPhase, setSearchPhase] = useState<'typing' | 'autocomplete' | 'suggestions' | 'results'>('typing');
  const [queryIndex, setQueryIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when demo is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          // Reset animation when not visible to prevent background changes
          setCurrentQuery('');
          setSearchPhase('typing');
          setTypingIndex(0);
        }
      },
      { threshold: 0.3 } // Only start animation when 30% of component is visible
    );

    if (demoRef.current) {
      observer.observe(demoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Only run animation if the demo is visible
    if (!isVisible) return;
    
    const query = searchQueries[queryIndex];
    
    // Typing animation
    if (searchPhase === 'typing' && typingIndex < query.length) {
      const timer = setTimeout(() => {
        const partial = query.substring(0, typingIndex + 1);
        setCurrentQuery(partial);
        setTypingIndex(typingIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
    
    // Phase transitions
    if (searchPhase === 'typing' && typingIndex >= query.length) {
      const timer = setTimeout(() => setSearchPhase('autocomplete'), 800);
      return () => clearTimeout(timer);
    }
    
    if (searchPhase === 'autocomplete') {
      const timer = setTimeout(() => setSearchPhase('suggestions'), 2500);
      return () => clearTimeout(timer);
    }
    
    if (searchPhase === 'suggestions') {
      const timer = setTimeout(() => setSearchPhase('results'), 2500);
      return () => clearTimeout(timer);
    }
    
    if (searchPhase === 'results') {
      const timer = setTimeout(() => {
        setQueryIndex((prev) => (prev + 1) % searchQueries.length);
        setTypingIndex(0);
        setCurrentQuery('');
        setSearchPhase('typing');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [searchPhase, typingIndex, queryIndex, isVisible]); // Added isVisible dependency

  const handleAutocompleteClick = (word: string) => {
    setCurrentQuery(word);
    setSearchPhase('results');
  };

  const handleSuggestionClick = (suggestion: { title: string; href: string }) => {
    // Open the link in a new tab to simulate navigation to help center
    window.open(suggestion.href, '_blank');
    // Also update the search query for demo purposes
    setCurrentQuery(suggestion.title);
    setSearchPhase('results');
  };

  const getAutocompleteWords = () => {
    return autocompleteData[currentQuery as keyof typeof autocompleteData] || [];
  };

  const getSuggestions = () => {
    return suggestionData[currentQuery as keyof typeof suggestionData] || [];
  };

  const getSearchResults = () => {
    const fullQuery = searchQueries[queryIndex];
    return searchResults[fullQuery as keyof typeof searchResults] || [];
  };

  const getAiOverview = () => {
    const fullQuery = searchQueries[queryIndex];
    const overviews: Record<string, string> = {
      medic: 'For medical coverage questions, the fastest path is to confirm your plan type first (Medicare, Medicaid, or private coverage), then review eligibility and enrollment timelines. If your issue is payment-related, use the claims and reimbursement guide to verify required documents, submission steps, and expected processing windows before escalating to support.',
      ship: 'Shipping support usually depends on your order stage. Start with live tracking for current status, then check delivery windows and carrier updates for delays. For international shipments, review customs requirements, restricted items, and destination rules, since these often add processing time that is not visible in basic order tracking.',
      refund: 'Refund outcomes typically depend on return eligibility, item condition, and original payment method. Confirm policy coverage and return window first, submit a refund request with the required order details, and track status updates after approval. Processing time can vary by bank or card network even after the refund is marked complete.',
      pass: 'If you are locked out, begin with password reset and account recovery verification steps, then update security settings like two-factor authentication to prevent repeat issues. For document-related queries such as passport support, use the dedicated service pages because requirements, turnaround times, and accepted proof documents differ by request type.',
      order: 'Order support is most effective when handled in sequence: check real-time order status, review shipment milestones, then use cancellation or modification options if the order has not yet moved to dispatch. For completed purchases, use order history for invoices, receipts, and repeat purchases, and refer to return/refund guidance when post-delivery issues arise.'
    };
    return overviews[fullQuery] || 'AI generated answer is currently unavailable for this query.';
  };

  return (
    <div ref={demoRef} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 w-full border shadow-sm">
      {/* Only show demo content if visible */}
      {isVisible ? (
        <>
          {/* Search Box */}
          <div className="relative mb-4">
            <div className="flex items-center bg-white border-2 border-gray-200 rounded-full px-5 py-4 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:scale-[1.02]">
          <svg className="w-5 h-5 text-blue-500 mr-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <div className="flex-1 text-gray-800 font-medium">
            <span className="text-lg">{currentQuery}</span>
            {searchPhase === 'autocomplete' && getAutocompleteWords().length > 0 && (
              <span className="text-gray-400 text-lg animate-pulse">{getAutocompleteWords()[0].substring(currentQuery.length)}</span>
            )}
            {searchPhase === 'typing' && (
              <span className="animate-pulse text-blue-500 ml-1 text-lg font-bold">|</span>
            )}
          </div>
          {searchPhase === 'results' && (
            <svg className="w-5 h-5 text-green-500 ml-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>

      {/* Combined Autocomplete and Suggestions Dropdown */}
      {(searchPhase === 'autocomplete' || searchPhase === 'suggestions') && 
       (getAutocompleteWords().length > 0 || getSuggestions().length > 0) && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-xl mb-6 animate-fadeIn transform transition-all duration-500 hover:shadow-2xl">
          
          {/* Autocomplete Section */}
          {getAutocompleteWords().length > 0 && (
            <div>
              <div className="px-5 py-3 text-xs font-semibold text-indigo-600 border-b bg-gradient-to-r from-indigo-50 to-blue-50 rounded-t-xl">
                ⚡ Autocomplete - Terms from Search Index
              </div>
              {getAutocompleteWords().slice(0, 2).map((word, idx) => (
                <div key={idx} className="px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer text-sm text-gray-700 animate-slideDown border-b border-gray-100 transition-all duration-300 transform hover:scale-[1.02]" style={{animationDelay: `${idx * 100}ms`}} onClick={() => handleAutocompleteClick(word)}>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-indigo-500 mr-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <span className="font-bold text-blue-600">{currentQuery}</span>
                    <span className="text-gray-800 font-medium">{word.substring(currentQuery.length)}</span>
                    <span className="text-xs text-indigo-500 ml-auto font-medium bg-indigo-100 px-2 py-1 rounded-full">indexed</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Suggestions Section */}
          {getSuggestions().length > 0 && (
            <div>
              <div className="px-5 py-3 text-xs font-semibold text-emerald-600 border-b bg-gradient-to-r from-emerald-50 to-green-50">
                💡 Smart Suggestions
              </div>
              {getSuggestions().slice(0, 3).map((suggestion, idx) => (
                <a key={idx} href={suggestion.href} target="_blank" rel="noopener noreferrer" className="block px-5 py-4 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 cursor-pointer animate-slideUp border-b border-gray-100 last:border-b-0 no-underline transition-all duration-300 transform hover:scale-[1.02] group" style={{animationDelay: `${idx * 100}ms`}} onClick={() => handleSuggestionClick(suggestion)}>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-emerald-500 mr-3 group-hover:animate-spin transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-sm text-gray-800 font-medium group-hover:text-emerald-700 transition-colors">{suggestion.title}</span>
                    <svg className="w-4 h-4 text-emerald-500 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Search Results */}
      {searchPhase === 'results' && getSearchResults().length > 0 && (
        <div className="space-y-4 animate-fadeIn">
          <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
            <div className="text-xs font-semibold text-blue-600 mb-2">AI Overview</div>
            <p className="text-sm text-gray-700 leading-relaxed">{getAiOverview()}</p>
            <div className="mt-3 flex items-center gap-3 text-gray-500">
              <button type="button" aria-label="Thumbs up" className="hover:text-green-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10V5a3 3 0 00-3-3l-1 5-3 3v10h11.28a2 2 0 001.97-1.66l1.2-7A2 2 0 0019.48 9H14zM7 10H4a1 1 0 00-1 1v8a1 1 0 001 1h3" />
                </svg>
              </button>
              <button type="button" aria-label="Thumbs down" className="hover:text-red-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14v5a3 3 0 003 3l1-5 3-3V4H5.72a2 2 0 00-1.97 1.66l-1.2 7A2 2 0 004.52 15H10zM17 14h3a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="text-xs text-gray-500 mb-4 flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            About <span className="font-semibold"> 1,234,567 </span> results 
            <span className="ml-1">(0.45 seconds)</span>
          </div>
          {getSearchResults().map((result, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer animate-slideUp transform hover:scale-[1.02] group" style={{animationDelay: `${idx * 150}ms`}}>
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-blue-600 font-semibold text-lg hover:text-blue-700 line-clamp-2 group-hover:underline transition-all duration-200">{result.title}</h4>
                <svg className="w-5 h-5 text-blue-500 ml-3 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="text-xs text-emerald-600 mb-2 truncate font-medium bg-emerald-50 inline-block px-2 py-1 rounded-md">{result.url}</div>
              <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">{result.description}</p>
            </div>
          ))}
        </div>
      )}
        </>
      ) : (
        /* Show static placeholder when not visible */
        <div className="text-center py-8">
          <div className="text-gray-500 text-sm">Global Consumer Help Center Demo</div>
          <div className="text-gray-400 text-xs mt-2">Scroll into view to see animation</div>
        </div>
      )}
    </div>
  );
}

export default function FederatedSearchDemo() {
  return (
    <div className="mt-6">
      <div className="mb-4 flex items-center">
        <span className="animate-pulse mr-2"></span>
        <span className="font-bold text-blue-600">Global Consumer Help Center API Demo</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Interactive demo of <strong className="text-blue-600">Autocomplete</strong>, <strong className="text-emerald-600">Suggestions</strong>, <strong className="text-purple-600">Search APIs</strong>, and <strong className="text-indigo-600">AI generated overview</strong>{' '}
        Integrated across <strong className="text-indigo-600">15+ help centers</strong> providing results from <strong className="text-orange-600">brand websites</strong>
      </p>
      <GoogleLikeSearchDemo />
    </div>
  );
}
