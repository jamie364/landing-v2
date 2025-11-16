import "../styles/globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Foxline — AI Car Deal Analyzer | Negotiate Like an Insider",
  description:
    "Stop overpaying for cars. Foxline uses insider secrets to analyze your contract, spot hidden fees, and help you negotiate a fair deal on used cars, new cars, and leases.",
  openGraph: {
    title: "Foxline — Negotiate Your Car Deal Like a Pro",
    description:
      "AI-powered tool that reveals dealer tactics and helps you negotiate better prices using insider knowledge. Get a fair deal on your next car.",
    url: "https://foxline.ai",
    siteName: "Foxline",
    images: ["/og-image.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foxline — Negotiate Car Deals Like an Insider",
    description:
      "AI analyzes your contract, reveals dealer tricks, and helps you negotiate fair prices. Stop overpaying.",
    images: ["/og-image.jpg"],
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Foxline",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free Tool"
      },
      "description": "AI-powered car contract analyzer that uses insider secrets to help buyers negotiate fair deals and avoid overpaying on used cars, new cars, and leases",
      "url": "https://foxline.ai",
      "audience": {
        "@type": "PeopleAudience",
        "audienceType": "Car Buyers"
      },
      "featureList": [
        "Contract Analysis",
        "Hidden Fee Detection",
        "Price Negotiation Guidance",
        "Dealer Tactic Exposure",
        "Fair Price Recommendations"
      ],
      "author": {
        "@type": "Organization",
        "name": "Foxline",
        "url": "https://foxline.ai",
        "logo": "https://foxline.ai/instagram_profile_photo.png",
        "sameAs": [
          "https://www.instagram.com/getfoxline",
          "https://www.pinterest.com/foxline"
        ]
      }
    })
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
        {/* Plausible Analytics */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            async
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="bg-white text-gray-800 dark:bg-darkbg dark:text-gray-200 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
