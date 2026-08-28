import { i as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as MessageSquare, h as Heart, n as Truck, o as ShieldAlert, u as Scale, x as Calculator } from "./_libs/lucide-react.mjs";
import { c as formatUsd, n as Route, s as formatLbs } from "./_ssr/router-CPdh4L2m.mjs";
import { b as typeImage, d as estimateMarket, f as getBySlug, h as inProductionYear, l as YEARS, m as getMockReviews, p as getMaintenanceSchedule, y as powertrainForYear } from "./_ssr/catalog-DjbtJjNv.mjs";
import { t as Button } from "./_ssr/button-Cg_PeIRX.mjs";
import { n as TypeChip, t as Stars } from "./_ssr/Stars-DPyjXKNQ.mjs";
import { n as getRatingMetadata, t as computeRating } from "./_ssr/ratingData-BWm-u2SY.mjs";
import { t as useAppStore } from "./_ssr/store-aQs7QiOF.mjs";
import { t as FieldSelect } from "./_ssr/input-opqfG9iy.mjs";
import { n as liveMarketValue } from "./_ssr/ai-Bx30ukzr.mjs";
import { n as lookupRecalls } from "./_ssr/nhtsa-705oFrAA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-JT9rJ16W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RvDetail() {
	const { slug } = Route.useParams();
	const search = Route.useSearch();
	const entry = getBySlug(slug);
	const [year, setYear] = (0, import_react.useState)(search.year);
	const [floorplan, setFloorplan] = (0, import_react.useState)(search.floorplan);
	const [live, setLive] = (0, import_react.useState)(null);
	const [liveErr, setLiveErr] = (0, import_react.useState)("");
	const [liveBusy, setLiveBusy] = (0, import_react.useState)(false);
	const [recalls, setRecalls] = (0, import_react.useState)(null);
	const [recallBusy, setRecallBusy] = (0, import_react.useState)(false);
	const toggleSaved = useAppStore((s) => s.toggleSaved);
	const isSaved = useAppStore((s) => s.isSaved);
	const toggleCompare = useAppStore((s) => s.toggleCompare);
	const compare = useAppStore((s) => s.compare);
	if (!entry) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl",
			children: "Model not in catalog"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-3 inline-block text-sm text-primary",
			children: "Back to search"
		})]
	});
	const { make, model, spec } = entry;
	const years = YEARS.filter((y) => inProductionYear(spec, parseInt(y, 10)));
	const rating = computeRating(make, model, year);
	const meta = getRatingMetadata(make, model, year);
	const mid = Math.round((spec.msrpRange[0] + spec.msrpRange[1]) / 2);
	const mv = live ?? estimateMarket(mid, parseInt(year, 10) || 2024);
	const maint = (0, import_react.useMemo)(() => getMaintenanceSchedule(spec), [spec]);
	const reviews = (0, import_react.useMemo)(() => getMockReviews(make, model, rating), [
		make,
		model,
		rating
	]);
	const saved = isSaved(entry.slug, year);
	async function fetchLive() {
		setLiveBusy(true);
		setLiveErr("");
		const res = await liveMarketValue({ data: {
			year,
			make,
			model,
			floorplan
		} });
		setLiveBusy(false);
		if (!res.ok) {
			setLiveErr(res.error);
			return;
		}
		setLive(res);
	}
	async function fetchRecalls() {
		setRecallBusy(true);
		const res = await lookupRecalls({ data: {
			make,
			model,
			year
		} });
		setRecallBusy(false);
		setRecalls(res.recalls);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl border border-border bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[21/9] min-h-48 bg-navy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: typeImage(spec.type),
							alt: "",
							className: "size-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-4 left-4 right-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeChip, { type: spec.type }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl",
									children: [
										make,
										" ",
										model
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-2xl text-sm text-muted",
									children: spec.description
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 border-t border-border p-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
							value: year,
							onChange: (e) => setYear(e.target.value),
							children: (years.length ? years : YEARS).map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: y,
								children: y
							}, y))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldSelect, {
							value: floorplan,
							onChange: (e) => setFloorplan(e.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All floorplans"
							}), spec.floorplans.map((fp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: fp,
								children: fp
							}, fp))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { rating }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl tabular text-primary",
									children: rating.toFixed(1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-dim",
									children: [meta.confidence, " conf."]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						k: "MSRP",
						v: `${formatUsd(spec.msrpRange[0], true)}–${formatUsd(spec.msrpRange[1], true)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						k: "Length",
						v: `${spec.lengthRange[0]}–${spec.lengthRange[1]} ft`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						k: "Weight",
						v: `${formatLbs(spec.weightRange[0])}–${formatLbs(spec.weightRange[1])}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						k: "Sleeps",
						v: String(spec.sleeps)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						k: "Slides",
						v: String(spec.slideouts)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						k: "Fuel",
						v: spec.fuelType
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: "Market value"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [live?.source ?? "Depreciation model from MSRP midpoint", floorplan ? ` · ${floorplan}` : ""]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: fetchLive,
							disabled: liveBusy,
							children: liveBusy ? "Searching market…" : "Live market estimate"
						})]
					}),
					liveErr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-danger",
						children: liveErr
					}) : null,
					live?.conditionNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: live.conditionNote
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueTile, {
								label: "Trade-in",
								value: formatUsd(mv.tradeIn)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueTile, {
								label: "Retail low",
								value: formatUsd(mv.retailLow)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueTile, {
								label: "Retail high",
								value: formatUsd(mv.retailHigh),
								accent: true
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					["Engine", spec.engine],
					["Chassis", spec.chassis],
					["Horsepower", spec.horsepower ? `${spec.horsepower} hp` : null],
					["Torque", spec.torqueLbFt ? `${spec.torqueLbFt} lb-ft` : null],
					["Fuel tank", spec.fuelCapacity ? `${spec.fuelCapacity} gal` : null],
					["Towing", spec.towingCapacity ? formatLbs(spec.towingCapacity) : null],
					["Fresh water", spec.freshWater ? `${spec.freshWater} gal` : null],
					["Gray / black", spec.grayWater || spec.blackWater ? `${spec.grayWater ?? "—"} / ${spec.blackWater ?? "—"} gal` : null],
					["Generator", spec.generator],
					["Awning", spec.awningLength ? `${spec.awningLength} ft` : null],
					["Ceiling", spec.ceilingHeight ? `${spec.ceilingHeight} in` : null],
					["Warranty", spec.warrantyYears ? `${spec.warrantyYears} yr` : null],
					["Years", `${spec.yearStart ?? "—"}–${spec.yearEnd ?? "current"}`],
					["Founded", spec.founded ? String(spec.founded) : null]
				].filter(([, v]) => v).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between gap-4 rounded-md border border-border bg-navy px-3 py-2.5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right tabular",
						children: v
					})]
				}, k))
			}),
			spec.powertrainByYear && spec.powertrainByYear.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "Powertrain by year"
					}),
					(() => {
						const current = powertrainForYear(spec, parseInt(year, 10) || 2024);
						return current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								"For ",
								year,
								": ",
								current.engine,
								current.horsepower ? ` · ${current.horsepower} hp` : "",
								current.chassis ? ` · ${current.chassis}` : ""
							]
						}) : null;
					})(),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[480px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-[11px] uppercase tracking-wide text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-2 py-1",
										children: "Years"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-2 py-1",
										children: "Engine"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-2 py-1",
										children: "HP"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-2 py-1",
										children: "Notes"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: spec.powertrainByYear.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-2 py-2 tabular",
										children: [
											p.from,
											"–",
											p.to
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-2 py-2",
										children: p.engine
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-2 py-2 tabular",
										children: p.horsepower ?? "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-2 py-2 text-muted",
										children: p.notes ?? p.chassis ?? ""
									})
								]
							}, `${p.from}-${p.to}-${p.engine}`)) })]
						})
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: saved ? "danger" : "secondary",
						onClick: () => toggleSaved({
							slug: entry.slug,
							make,
							model,
							year,
							floorplan
						}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }),
							" ",
							saved ? "Saved" : "Save to garage"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: compare.includes(entry.slug) ? "default" : "secondary",
						onClick: () => toggleCompare(entry.slug),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "size-4" }),
							" ",
							compare.includes(entry.slug) ? "In compare" : "Compare"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/finance",
							search: {
								price: String(mid),
								year,
								make,
								model
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "size-4" }), " Finance"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/tow",
							search: { slug: entry.slug },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-4" }), " Towing"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/grok",
							search: { q: `${year} ${make} ${model} ownership issues and value` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), " Ask RvGROK"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-center gap-2 font-display text-2xl font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-5 text-primary" }), " NHTSA recalls"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							onClick: fetchRecalls,
							disabled: recallBusy,
							children: recallBusy ? "Looking up…" : "Look up recalls"
						})]
					}),
					recalls && recalls.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "No open campaigns returned for this year/make/model."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-3",
						children: recalls?.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-md border border-border bg-navy p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-wide text-primary",
									children: r.component || "Recall"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm",
									children: r.summary
								}),
								r.campaignNumber ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-xs text-dim",
									children: r.campaignNumber
								}) : null
							]
						}, r.campaignNumber || r.summary))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-2xl font-semibold",
				children: "Maintenance"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[520px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-navy text-[11px] uppercase tracking-wide text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Task"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Interval"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Priority"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: maint.slice(0, 10).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: m.task
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-muted",
								children: m.interval
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-primary",
								children: m.priority
							})
						]
					}, m.task)) })]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-2xl font-semibold",
					children: "Owner notes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs text-dim",
					children: "Illustrative owner-style notes used in-app — not a live review feed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-2",
					children: reviews.slice(0, 4).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-semibold",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									r.author,
									" · ",
									r.location,
									" · ",
									r.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: r.body
							})
						]
					}, r.id))
				})
			] })
		]
	});
}
function StatCard({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] uppercase tracking-[0.14em] text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-display text-xl tabular",
			children: v
		})]
	});
}
function ValueTile({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-navy p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] uppercase tracking-wide text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-1 font-display text-3xl tabular ${accent ? "text-success" : "text-fg"}`,
			children: value
		})]
	});
}
//#endregion
export { RvDetail as component };
