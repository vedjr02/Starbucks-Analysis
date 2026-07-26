"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"
import { methodSteps } from "@/lib/case-data"

export function MethodologySection() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <section id="method" className="section-pad relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <BlurFade inView>
          <p className="eyebrow">Method</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-foam sm:text-4xl lg:text-5xl text-balance">
            A repeatable analytics loop, not a one-off report
          </h2>
          <p className="mt-4 max-w-2xl text-foam/65">
            Walk the four steps used on this case — from framing the question
            to validated recommendations.
          </p>
        </BlurFade>

        <BlurFade delay={0.12} inView className="mt-14">
          <Stepper
            value={currentStep}
            onValueChange={setCurrentStep}
            className="w-full space-y-10"
            indicators={{
              completed: <Check className="size-4" />,
            }}
          >
            <StepperNav className="gap-2 sm:gap-3">
              {methodSteps.map((item, index) => (
                <StepperItem
                  key={item.step}
                  step={item.step}
                  className="flex-1 items-start"
                  completed={currentStep > item.step}
                >
                  <StepperTrigger className="w-full flex-col gap-3 rounded-none bg-transparent p-0 hover:bg-transparent">
                    <div className="flex w-full items-center gap-2">
                      <StepperIndicator className="size-9 border border-white/10 bg-forest data-[state=active]:border-siren data-[state=active]:bg-siren data-[state=completed]:border-siren-bright data-[state=completed]:bg-siren-bright data-[state=inactive]:text-mist">
                        {item.step}
                      </StepperIndicator>
                      {index < methodSteps.length - 1 && (
                        <StepperSeparator className="h-px flex-1 bg-white/10 group-data-[state=completed]/step:bg-siren-bright" />
                      )}
                    </div>
                    <StepperTitle className="w-full text-left font-display text-sm font-semibold text-foam/85 sm:text-base">
                      {item.title}
                    </StepperTitle>
                  </StepperTrigger>
                </StepperItem>
              ))}
            </StepperNav>

            <StepperPanel className="relative min-h-[140px] overflow-hidden rounded-2xl border border-white/8 bg-forest/60 p-6 sm:p-8">
              <BorderBeam
                size={80}
                duration={8}
                colorFrom="#00754a"
                colorTo="#d4b896"
                borderWidth={1.5}
              />
              {methodSteps.map((item) => (
                <StepperContent key={item.step} value={item.step}>
                  <p className="text-xs uppercase tracking-[0.2em] text-mist">
                    Step {item.step} of {methodSteps.length}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-foam">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-foam/70 sm:text-lg">
                    {item.body}
                  </p>
                </StepperContent>
              ))}
            </StepperPanel>

            <div className="flex items-center justify-between gap-3">
              <Button
                variant="outline"
                className="border-white/15 bg-transparent text-foam hover:bg-white/5"
                onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              <Button
                className="bg-siren text-primary-foreground hover:bg-siren-bright"
                onClick={() =>
                  setCurrentStep((prev) =>
                    Math.min(methodSteps.length, prev + 1)
                  )
                }
                disabled={currentStep === methodSteps.length}
              >
                Next step
              </Button>
            </div>
          </Stepper>
        </BlurFade>
      </div>
    </section>
  )
}
