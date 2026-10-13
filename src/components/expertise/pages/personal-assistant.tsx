import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarCheck,
  CalendarDays,
  Check,
  CheckCheck,
  ChevronRight,
  Clock3,
  Coffee,
  Heart,
  Luggage,
  MapPin,
  Plane,
  ShoppingBag,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./personal-assistant.css";

type Preference = "low" | "medium" | "high" | "light" | "heavy";

const preferences: {
  key: "balance" | "travel" | "tasks";
  label: string;
  values: { value: Preference; label: string }[];
}[] = [
  {
    key: "balance",
    label: "Work–life balance",
    values: [
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
    ],
  },
  {
    key: "travel",
    label: "Travel frequency",
    values: [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
    ],
  },
  {
    key: "tasks",
    label: "Personal task load",
    values: [
      { value: "light", label: "Light" },
      { value: "heavy", label: "Heavy" },
    ],
  },
];

const week = [
  {
    day: "MON",
    date: "12",
    title: "The Monday reset",
    without:
      "A work call runs late. The school pickup plan and dinner reservation are suddenly up in the air.",
    with: "Your assistant has coordinated the pickup, confirmed dinner, and protected the time between calls.",
    icon: CalendarCheck,
    tag: "CALENDAR",
  },
  {
    day: "TUE",
    date: "13",
    title: "A trip that just works",
    without:
      "A flight changes, the hotel is across town, and the updated itinerary is buried in your inbox.",
    with: "Your assistant adjusts the booking, refreshes the itinerary, and has the new details ready to go.",
    icon: Plane,
    tag: "TRAVEL",
  },
  {
    day: "WED",
    date: "14",
    title: "The little things, handled",
    without:
      "A delivery needs rescheduling, a prescription needs picking up, and your afternoon is already full.",
    with: "Your assistant takes care of the errands and keeps you posted—without adding another thing to your list.",
    icon: ShoppingBag,
    tag: "LIFE ADMIN",
  },
  {
    day: "THU",
    date: "15",
    title: "Everyone knows the plan",
    without:
      "A family plan and a work commitment collide while messages keep coming from every direction.",
    with: "Your assistant checks the details, coordinates with everyone, and puts the right plan on your calendar.",
    icon: UsersRound,
    tag: "COORDINATION",
  },
  {
    day: "FRI",
    date: "16",
    title: "A weekend that starts on time",
    without:
      "You're still remembering reservations, replies, and the things you promised to do this weekend.",
    with: "Your assistant closes the loops, confirms the plans, and gives you your weekend back.",
    icon: Heart,
    tag: "FOLLOW-THROUGH",
  },
];

const services: {
  title: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Schedule & personal calendar",
    description:
      "Balance work meetings, appointments, family events, and the breathing room between them.",
    outcome: "Family event and work trip—both confirmed, without you chasing.",
    icon: CalendarDays,
  },
  {
    title: "Travel & logistics",
    description:
      "Coordinate personal and business travel, from bookings to the details that make a trip feel easy.",
    outcome: "Your updated itinerary is ready before plans change again.",
    icon: Luggage,
  },
  {
    title: "Errands & life admin",
    description: "Arrange everyday errands, reservations, deliveries, and personal appointments.",
    outcome: "The small things get done without taking over your day.",
    icon: ShoppingBag,
  },
  {
    title: "Communication & coordination",
    description: "Keep family, service providers, and work contacts on the same page.",
    outcome: "Everyone has the plan. You don't have to be the go-between.",
    icon: UsersRound,
  },
  {
    title: "Reminders & follow-through",
    description:
      "Keep track of personal commitments and the details you don't want to remember yourself.",
    outcome: "Nothing slips through while your attention is elsewhere.",
    icon: Bell,
  },
];

function getOutcome(balance: Preference, travel: Preference, tasks: Preference) {
  if (travel === "high") {
    return {
      eyebrow: "MADE FOR YOUR MILEAGE",
      title: "More trips. Less trip-planning.",
      description:
        "Flights, changes, ground transport, and home-life details stay coordinated—so the travel takes less out of you.",
      icon: Plane,
      tag: "TRAVEL, WITHOUT THE TANGLE",
    };
  }

  if (tasks === "heavy") {
    return {
      eyebrow: "A LIGHTER EVERYDAY",
      title: "Your personal list, off your mind.",
      description:
        "Appointments, errands, reservations, and all those little follow-ups get a thoughtful owner and a clear next step.",
      icon: CheckCheck,
      tag: "LIFE ADMIN, UNDER CONTROL",
    };
  }

  if (balance === "high") {
    return {
      eyebrow: "PROTECT WHAT MATTERS",
      title: "Make room for life outside work.",
      description:
        "Personal plans are coordinated around your workday, your time stays protected, and your day can end when it should.",
      icon: Heart,
      tag: "YOUR TIME, PROTECTED",
    };
  }

  return {
    eyebrow: "A MORE PUT-TOGETHER WEEK",
    title: "Both sides of life, in sync.",
    description:
      "Work commitments and personal plans come together in one considered schedule—without all the mental juggling.",
    icon: CalendarCheck,
    tag: "WORK & LIFE, CONNECTED",
  };
}

export function PersonalAssistantPage() {
  const [balance, setBalance] = useState<Preference>("high");
  const [travel, setTravel] = useState<Preference>("medium");
  const [tasks, setTasks] = useState<Preference>("light");
  const [selectedDay, setSelectedDay] = useState(week[0]?.day ?? "MON");
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const activeDay = week.find((item) => item.day === selectedDay) ?? week[0]!;
  const ActiveDayIcon = activeDay.icon;
  const outcome = getOutcome(balance, travel, tasks);
  const OutcomeIcon = outcome.icon;

  const togglePreference = (key: string, value: Preference) => {
    if (key === "balance") setBalance(value);
    if (key === "travel") setTravel(value);
    if (key === "tasks") setTasks(value);
  };

  const toggleCard = (title: string) => {
    setFlippedCards((current) =>
      current.includes(title) ? current.filter((item) => item !== title) : [...current, title],
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pa-page">
        <section className="pa-hero" aria-labelledby="pa-heading">
          <div className="pa-hero-orbit pa-hero-orbit-one" aria-hidden="true" />
          <div className="pa-hero-orbit pa-hero-orbit-two" aria-hidden="true" />
          <div className="pa-container pa-hero-layout">
            <div className="pa-hero-copy">
              <p className="pa-eyebrow">
                <span /> PERSONAL ASSISTANT · YOUR LIFE, HANDLED
              </p>
              <h1 id="pa-heading">
                Your schedule, travel & life logistics — <em>handled.</em>
              </h1>
              <p className="pa-hero-description">
                A dedicated Personal Assistant manages the details across work and life so you stay
                free for the moments that matter.
              </p>
              <a href="/contact#inquiry" className="pa-button pa-button-primary">
                Get personal support <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="pa-see-how" href="#week-in-your-life">
                See how it works <ArrowDown aria-hidden="true" />
              </a>

              <div className="pa-preferences">
                <div className="pa-preferences-heading">
                  <span className="pa-small-label">MAKE IT YOURS</span>
                  <p>What does your week look like?</p>
                </div>
                {preferences.map((preference) => {
                  const selected = { balance, travel, tasks }[preference.key];
                  return (
                    <fieldset className="pa-preference-row" key={preference.key}>
                      <legend>{preference.label}</legend>
                      <div className="pa-segmented-control">
                        {preference.values.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            aria-pressed={selected === option.value}
                            onClick={() => togglePreference(preference.key, option.value)}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  );
                })}
              </div>
            </div>

            <div
              className="pa-lifestyle-visual"
              aria-label="A busy week made easier with personal assistance"
            >
              <div className="pa-visual-header">
                <span className="pa-visual-brand">
                  <span /> A WEEK, AT A GLANCE
                </span>
                <span className="pa-visual-date">OCT 12 — 16</span>
              </div>
              <div className="pa-visual-columns">
                <div className="pa-visual-busy">
                  <span className="pa-visual-kicker">BEFORE</span>
                  <h2>Everything at once.</h2>
                  <div className="pa-scattered-event pa-event-flight">
                    <Plane aria-hidden="true" />
                    <span>Flight moved · 7:10 AM</span>
                    <i>!</i>
                  </div>
                  <div className="pa-scattered-event pa-event-meeting">
                    <CalendarDays aria-hidden="true" />
                    <span>Client call · overlaps pickup</span>
                    <i>!</i>
                  </div>
                  <div className="pa-scattered-event pa-event-errand">
                    <ShoppingBag aria-hidden="true" />
                    <span>Pick up package · today</span>
                  </div>
                  <div className="pa-scattered-event pa-event-family">
                    <Heart aria-hidden="true" />
                    <span>Family dinner · confirm?</span>
                    <i>!</i>
                  </div>
                  <div className="pa-visual-counter">
                    <Bell aria-hidden="true" /> 6 things to remember
                  </div>
                </div>
                <div className="pa-visual-divider">
                  <ArrowRight aria-hidden="true" />
                </div>
                <div className={`pa-visual-clear pa-travel-${travel}`}>
                  <span className="pa-visual-kicker">WITH YOUR ASSISTANT</span>
                  <h2>Already taken care of.</h2>
                  <div className="pa-clear-event">
                    <span className="pa-clear-icon">
                      <CalendarCheck aria-hidden="true" />
                    </span>
                    <span>
                      <strong>Client call confirmed</strong>
                      <small>Pickup time protected</small>
                    </span>
                    <Check aria-hidden="true" />
                  </div>
                  <div className="pa-clear-event">
                    <span className="pa-clear-icon">
                      <Plane aria-hidden="true" />
                    </span>
                    <span>
                      <strong>New flight, all set</strong>
                      <small>Updated itinerary ready</small>
                    </span>
                    <Check aria-hidden="true" />
                  </div>
                  <div className="pa-clear-event">
                    <span className="pa-clear-icon">
                      <Heart aria-hidden="true" />
                    </span>
                    <span>
                      <strong>Dinner confirmed</strong>
                      <small>Friday · 7:00 PM</small>
                    </span>
                    <Check aria-hidden="true" />
                  </div>
                  <div className="pa-visual-ready">
                    <Sparkles aria-hidden="true" /> YOU JUST SHOW UP
                  </div>
                </div>
              </div>
              <div className="pa-visual-caption">
                <span>
                  <span />{" "}
                  {travel === "high"
                    ? "TRAVEL PLANS, ALREADY IN MOTION"
                    : "WORK & LIFE, BACK IN SYNC"}
                </span>
                <span>
                  {tasks === "heavy" ? "EXTRA HANDS ON LIFE ADMIN" : "SPACE FOR WHAT MATTERS"}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="pa-week-section"
          id="week-in-your-life"
          aria-labelledby="pa-week-heading"
        >
          <div className="pa-container">
            <div className="pa-section-intro">
              <p className="pa-eyebrow">
                <span /> A WEEK THAT FEELS MORE LIKE YOURS
              </p>
              <h2 id="pa-week-heading">
                Your week, with fewer <em>“I’ll handle it later.”</em>
              </h2>
              <p>Pick a day. See what changes when someone thoughtful is already on the details.</p>
            </div>
            <div className="pa-calendar">
              <div className="pa-calendar-top">
                <div>
                  <span className="pa-small-label">A MORE PUT-TOGETHER WEEK</span>
                  <strong>October 12 – 16</strong>
                </div>
                <span className="pa-calendar-timezone">
                  <Clock3 aria-hidden="true" /> YOUR TIME ZONE
                </span>
              </div>
              <div className="pa-week-grid" role="group" aria-label="Choose a day to see your week">
                {week.map((item) => {
                  const Icon = item.icon;
                  const active = selectedDay === item.day;
                  return (
                    <button
                      key={item.day}
                      type="button"
                      className={`pa-day-button${active ? " is-selected" : ""}`}
                      aria-pressed={active}
                      onClick={() => setSelectedDay(item.day)}
                    >
                      <span className="pa-day-name">{item.day}</span>
                      <span className="pa-day-date">{item.date}</span>
                      <Icon aria-hidden="true" />
                      <span className="pa-day-dot" />
                    </button>
                  );
                })}
              </div>
              <article className="pa-day-story" key={activeDay.day}>
                <div className="pa-day-story-heading">
                  <span className="pa-day-story-icon">
                    <ActiveDayIcon aria-hidden="true" />
                  </span>
                  <div>
                    <span className="pa-small-label">
                      {activeDay.day} · {activeDay.tag}
                    </span>
                    <h3>{activeDay.title}</h3>
                  </div>
                </div>
                <div className="pa-day-compare">
                  <div className="pa-day-without">
                    <span className="pa-small-label">
                      <i /> WITHOUT A PA
                    </span>
                    <p>{activeDay.without}</p>
                  </div>
                  <div className="pa-day-with">
                    <span className="pa-small-label">
                      <i /> WITH YOUR PA
                    </span>
                    <p>{activeDay.with}</p>
                  </div>
                </div>
                <div className="pa-day-story-footer">
                  <Sparkles aria-hidden="true" />
                  <span>You just show up. The details are already handled.</span>
                  <span className="pa-day-count">
                    {week.findIndex((item) => item.day === activeDay.day) + 1} / 5
                  </span>
                </div>
              </article>
              <div className="pa-calendar-bottom">
                <span>
                  <span /> PERSONAL PLANS, PROFESSIONALLY COORDINATED
                </span>
                <span>
                  SELECT ANY DAY TO EXPLORE <ChevronRight aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pa-services-section" aria-labelledby="pa-services-heading">
          <div className="pa-container">
            <div className="pa-section-intro">
              <p className="pa-eyebrow">
                <span /> A LITTLE MORE ROOM TO BE YOU
              </p>
              <h2 id="pa-services-heading">
                One person. All the details <em>you shouldn’t have to hold.</em>
              </h2>
              <p>Tap a card to see how everyday support feels when it’s personal.</p>
            </div>
            <div className="pa-service-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isFlipped = flippedCards.includes(service.title);
                const cardId = `pa-service-${index}`;
                return (
                  <article
                    className={`pa-service-card${isFlipped ? " is-flipped" : ""}`}
                    key={service.title}
                  >
                    <button
                      type="button"
                      className="pa-flip-button"
                      aria-expanded={isFlipped}
                      aria-controls={cardId}
                      onClick={() => toggleCard(service.title)}
                    >
                      <span className="pa-card-face pa-card-front" aria-hidden={isFlipped}>
                        <span className="pa-service-icon">
                          <Icon aria-hidden="true" />
                        </span>
                        <span className="pa-service-number">0{index + 1} / PERSONAL SUPPORT</span>
                        <strong>{service.title}</strong>
                        <span className="pa-flip-hint">
                          {isFlipped ? "BACK TO TASK" : "SEE WHAT CHANGES"}{" "}
                          <ArrowRight aria-hidden="true" />
                        </span>
                      </span>
                      <span
                        className="pa-card-face pa-card-back"
                        id={cardId}
                        aria-hidden={!isFlipped}
                      >
                        <span className="pa-back-label">
                          <Sparkles aria-hidden="true" /> THE FEELING
                        </span>
                        <strong>{service.outcome}</strong>
                        <span>{service.description}</span>
                        <span className="pa-flip-hint">
                          BACK TO TASK <ArrowRight aria-hidden="true" />
                        </span>
                      </span>
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="pa-outcome-section"
          aria-live="polite"
          aria-atomic="true"
          aria-labelledby="pa-outcome-heading"
        >
          <div className="pa-container pa-outcome-layout">
            <div className="pa-outcome-copy" key={`${balance}-${travel}-${tasks}`}>
              <p className="pa-eyebrow">
                <span /> {outcome.eyebrow}
              </p>
              <h2 id="pa-outcome-heading">{outcome.title}</h2>
              <p>{outcome.description}</p>
              <div className="pa-preference-summary">
                <span>
                  BALANCE <strong>{balance}</strong>
                </span>
                <i />
                <span>
                  TRAVEL <strong>{travel}</strong>
                </span>
                <i />
                <span>
                  PERSONAL TO-DOS <strong>{tasks}</strong>
                </span>
              </div>
            </div>
            <div className="pa-outcome-card" key={outcome.tag}>
              <div className="pa-outcome-card-top">
                <span>YOUR KIND OF WEEK</span>
                <span>
                  <span /> PERSONALIZED
                </span>
              </div>
              <div className={`pa-outcome-illustration pa-outcome-travel-${travel}`}>
                <div className="pa-outcome-sun" />
                <div className="pa-outcome-orbit">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="pa-outcome-main-icon">
                  <OutcomeIcon aria-hidden="true" />
                </span>
                <span className="pa-orbit-icon pa-orbit-plane">
                  <Plane aria-hidden="true" />
                </span>
                <span className="pa-orbit-icon pa-orbit-heart">
                  <Heart aria-hidden="true" />
                </span>
                <span className="pa-orbit-icon pa-orbit-check">
                  <CheckCheck aria-hidden="true" />
                </span>
              </div>
              <div className="pa-outcome-card-footer">
                <span>{outcome.tag}</span>
                <span>
                  BUILT AROUND YOU <ArrowRight aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pa-final-cta" aria-labelledby="pa-cta-heading">
          <div className="pa-final-decoration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="pa-final-copy">
            <p className="pa-eyebrow">
              <span /> YOUR LIFE, HANDLED
            </p>
            <h2 id="pa-cta-heading">
              Live your life.
              <br />
              <em>We’ll handle the rest.</em>
            </h2>
            <p>
              Your schedule, travel, and everyday logistics—coordinated around the life you want to
              live.
            </p>
            <div className="pa-final-actions">
              <a href="/contact#inquiry" className="pa-button pa-button-primary">
                Get personal support <ArrowUpRight aria-hidden="true" />
              </a>
              <a href="/contact#inquiry" className="pa-button pa-button-secondary">
                See plans <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="pa-final-note">
            <span>
              <Coffee aria-hidden="true" />
            </span>
            <p>
              <strong>Consider it taken care of.</strong>
              <br />
              Make time for the moments in between.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
