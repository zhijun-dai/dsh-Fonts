// dsh-fonts — browser half (client plugin bundle). GENERATED FILE:
// run `node scripts/gen-client.mjs` to regenerate from lib/client.tpl.js.
//
// Loaded by dsh-client-modules at /plugins/dsh-fonts/client.js and executed
// through the vendored cordis Loader's lazy-CJS module table
// (window.__ModuleLoader__.load). The factory body is plain CJS with
// require() resolved against the shell's module table — the same shape the
// shipped ui-* packages' tsdown bundles emit.
window.__ModuleLoader__.load({
	id: "dsh-fonts",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let _primitives = require("@deepseek-ai/dsh-client-ui-primitives");

		//#region dsh-fonts: definitions
		/** The settings row's locale namespace. */
		const SETTINGS_NS = "settings.fonts";
		/** localStorage key holding the font preferences. */
		const STORAGE_KEY = "dsh-fonts:prefs";
		/** Sentinel id meaning "no custom font — the shipped system stacks". */
		const DEFAULT_ID = "system";
		/** Active id used while a user-imported custom set is applied. */
		const CUSTOM_ID = "custom";
		/** Host route the bundled webfonts are served from. */
		const FONT_URL = "/plugins/dsh-fonts/fonts/";
		/** Element id of the injected override sheet. */
		const STYLE_ID = "dsh-fonts-style";

		/**
		 * The bundled font presets, generated from data/presets.json. Each entry
		 * is { id, ui, code, faces } where ui/code are --dsw-font-family /
		 * --ds-font-family-code stacks and faces declare the @font-face rules
		 * (file names resolve against FONT_URL).
		 */
		const PRESETS = [
  {
    "id": "system",
    "ui": [
      "-apple-system",
      "BlinkMacSystemFont",
      "'Segoe UI'",
      "'PingFang SC'",
      "'Hiragino Sans GB'",
      "'Microsoft YaHei'",
      "'Helvetica Neue'",
      "Helvetica",
      "Arial",
      "sans-serif"
    ],
    "code": [
      "'SF Mono'",
      "'JetBrains Mono'",
      "'Fira Code'",
      "Consolas",
      "'Liberation Mono'",
      "Menlo",
      "Courier",
      "'PingFang SC'",
      "'Microsoft YaHei'"
    ],
    "faces": []
  },
  {
    "id": "jetbrains-inter",
    "ui": [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "'Segoe UI'",
      "'PingFang SC'",
      "'Hiragino Sans GB'",
      "'Microsoft YaHei'",
      "sans-serif"
    ],
    "code": [
      "'JetBrains Mono'",
      "'SF Mono'",
      "Consolas",
      "'PingFang SC'",
      "'Microsoft YaHei'",
      "monospace"
    ],
    "faces": [
      {
        "family": "Inter",
        "weight": "400",
        "file": "inter-latin-400-normal.woff2"
      },
      {
        "family": "Inter",
        "weight": "600",
        "file": "inter-latin-600-normal.woff2"
      },
      {
        "family": "Inter",
        "weight": "700",
        "file": "inter-latin-700-normal.woff2"
      },
      {
        "family": "JetBrains Mono",
        "weight": "400",
        "file": "jetbrains-mono-latin-400-normal.woff2"
      },
      {
        "family": "JetBrains Mono",
        "weight": "700",
        "file": "jetbrains-mono-latin-700-normal.woff2"
      }
    ]
  },
  {
    "id": "fira-plex",
    "ui": [
      "'IBM Plex Sans'",
      "-apple-system",
      "BlinkMacSystemFont",
      "'Segoe UI'",
      "'PingFang SC'",
      "'Hiragino Sans GB'",
      "'Microsoft YaHei'",
      "sans-serif"
    ],
    "code": [
      "'Fira Code'",
      "'SF Mono'",
      "Consolas",
      "'PingFang SC'",
      "'Microsoft YaHei'",
      "monospace"
    ],
    "faces": [
      {
        "family": "IBM Plex Sans",
        "weight": "400",
        "file": "ibm-plex-sans-latin-400-normal.woff2"
      },
      {
        "family": "IBM Plex Sans",
        "weight": "600",
        "file": "ibm-plex-sans-latin-600-normal.woff2"
      },
      {
        "family": "IBM Plex Sans",
        "weight": "700",
        "file": "ibm-plex-sans-latin-700-normal.woff2"
      },
      {
        "family": "Fira Code",
        "weight": "400",
        "file": "fira-code-latin-400-normal.woff2"
      },
      {
        "family": "Fira Code",
        "weight": "700",
        "file": "fira-code-latin-700-normal.woff2"
      }
    ]
  },
  {
    "id": "cascadia",
    "ui": [
      "-apple-system",
      "BlinkMacSystemFont",
      "'Segoe UI'",
      "'PingFang SC'",
      "'Hiragino Sans GB'",
      "'Microsoft YaHei'",
      "sans-serif"
    ],
    "code": [
      "'Cascadia Code'",
      "'SF Mono'",
      "Consolas",
      "'PingFang SC'",
      "'Microsoft YaHei'",
      "monospace"
    ],
    "faces": [
      {
        "family": "Cascadia Code",
        "weight": "400",
        "file": "cascadia-code-latin-400-normal.woff2"
      },
      {
        "family": "Cascadia Code",
        "weight": "700",
        "file": "cascadia-code-latin-700-normal.woff2"
      }
    ]
  }
];

		/** The system preset doubles as the fallback tail for custom sets. */
		const SYSTEM = PRESETS.find((preset) => preset.id === DEFAULT_ID);

		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"font.title": "字体",
			"font.default": "默认",
			"font.jetbrains-inter": "JetBrains Mono + Inter",
			"font.fira-plex": "Fira Code + IBM Plex Sans",
			"font.cascadia": "Cascadia Code",
			"font.custom": "自定义",
			"font.custom.ui": "界面字体",
			"font.custom.code": "代码字体",
			"font.custom.empty": "尚未导入自定义字体",
			"font.custom.family": "字体名",
			"font.custom.url": "woff2 链接",
			"font.custom.weight": "字重",
			"font.custom.add": "添加",
			"font.custom.remove": "移除",
			"font.custom.invalid": "请输入字体名和有效的 http(s) woff2 链接",
			"font.weightHint": "字重 = 字体文件本身的粗细档位。下载页面通常会标注（Regular=400、Bold=700），请选择与文件一致的那档；选错不报错，只是加粗效果会由浏览器模拟",
			"font.weight.400": "400 常规",
			"font.weight.500": "500 中等",
			"font.weight.600": "600 半粗",
			"font.weight.700": "700 粗体"
		};

		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"font.title": "Font",
			"font.default": "Default",
			"font.jetbrains-inter": "JetBrains Mono + Inter",
			"font.fira-plex": "Fira Code + IBM Plex Sans",
			"font.cascadia": "Cascadia Code",
			"font.custom": "Custom",
			"font.custom.ui": "UI font",
			"font.custom.code": "Code font",
			"font.custom.empty": "No custom fonts imported",
			"font.custom.family": "Family",
			"font.custom.url": "woff2 URL",
			"font.custom.weight": "Weight",
			"font.custom.add": "Add",
			"font.custom.remove": "Remove",
			"font.custom.invalid": "Enter a family name and a valid http(s) woff2 URL",
			"font.weightHint": "Weight = the grade your font file itself is. Download pages usually label it (Regular=400, Bold=700) — pick the matching grade; a wrong pick won't break anything, the browser just fakes the bold effect",
			"font.weight.400": "400 Regular",
			"font.weight.500": "500 Medium",
			"font.weight.600": "600 Semibold",
			"font.weight.700": "700 Bold"
		};
		//#endregion

		//#region dsh-fonts: persistence
		/** Read a localStorage string value (null on absence or error). */
		function readStorage(key) {
			try {
				const value = window.localStorage.getItem(key);
				return typeof value === "string" ? value : null;
			} catch {
				return null;
			}
		}

		/** Write (or remove with null) a localStorage value. */
		function writeStorage(key, value) {
			try {
				if (value === null) window.localStorage.removeItem(key);
				else window.localStorage.setItem(key, value);
			} catch {
				// storage unavailable / quota — the preference stays process-local
			}
		}

		/** Saved font prefs { selected, custom } or null. */
		function readPrefs() {
			const raw = readStorage(STORAGE_KEY);
			if (raw === null) return null;
			try {
				const parsed = JSON.parse(raw);
				if (typeof parsed !== "object" || parsed === null) return null;
				return parsed;
			} catch {
				return null;
			}
		}

		/** Persist the active selection and the custom set. */
		function writePrefs(prefs) {
			writeStorage(STORAGE_KEY, JSON.stringify(prefs));
		}
		//#endregion

		//#region dsh-fonts: registry
		/** Serialize one face list into @font-face rules. */
		function facesToCss(faces) {
			return faces
				.map((face) => {
					const src = face.src.map((url) => `url("${url}")`).join(", ");
					return `@font-face{font-family:"${face.family}";font-style:normal;font-weight:${face.weight ?? "400"};font-display:${face.display ?? "swap"};src:${src} format("woff2");}`;
				})
				.join("");
		}

		/**
		 * The font registry — the plugin's public interface, provided to the
		 * root context as `ctx.fonts` (consumers: ctx.get("fonts")). Bundled
		 * presets come from PRESETS; other plugins register their own presets
		 * with register(); users import custom faces through selectCustom().
		 */
		function createRegistry() {
			const bundled = new Map(
				PRESETS.map((preset) => [
					preset.id,
					{
						...preset,
						faces: preset.faces.map((face) => ({
							family: face.family,
							weight: String(face.weight ?? "400"),
							display: "swap",
							src: [FONT_URL + face.file]
						}))
					}
				])
			);
			const registered = new Map();
			const listeners = new Set();
			let custom = null;
			let activeId = DEFAULT_ID;
			let revision = 0;
			let pendingId = null;

			const allPresets = () => [...bundled.values(), ...registered.values()];

			const notify = () => {
				revision += 1;
				const snapshot = getSnapshot();
				for (const listener of listeners) listener(snapshot);
			};

			/** Rewrite the injected sheet to match the active selection. */
			function applyStyle() {
				const existing = document.getElementById(STYLE_ID);
				if (activeId === DEFAULT_ID) {
					existing?.remove();
					return;
				}
				let uiStack;
				let codeStack;
				let faces;
				if (activeId === CUSTOM_ID && custom) {
					uiStack = [...custom.ui.map((face) => face.family), ...SYSTEM.ui].join(", ");
					codeStack = [...custom.code.map((face) => face.family), ...SYSTEM.code].join(", ");
					faces = [...custom.ui, ...custom.code];
				} else {
					const preset = allPresets().find((candidate) => candidate.id === activeId);
					if (!preset) return;
					uiStack = preset.ui.join(", ");
					codeStack = preset.code.join(", ");
					faces = preset.faces;
				}
				const css = `${facesToCss(faces)}:root{--dsw-font-family:${uiStack};--ds-font-family-code:${codeStack};}`;
				const style = existing ?? document.createElement("style");
				if (!existing) {
					style.id = STYLE_ID;
					document.head.appendChild(style);
				}
				style.textContent = css;
			}

			function persist() {
				writePrefs({ selected: activeId, custom });
			}

			/** One immutable snapshot published on every change. */
			function getSnapshot() {
				return {
					activeId,
					custom,
					presets: allPresets(),
					revision
				};
			}

			/** Register a plugin-provided preset; returns its disposer. */
			function register(preset) {
				if (!preset || typeof preset.id !== "string") throw new Error("font preset needs an id");
				registered.set(preset.id, {
					...preset,
					faces: (preset.faces ?? []).map((face) => ({
						family: face.family,
						weight: String(face.weight ?? "400"),
						display: face.display ?? "swap",
						src: face.src ?? []
					}))
				});
				if (pendingId === preset.id) {
					pendingId = null;
					select(preset.id);
				} else {
					notify();
				}
				return () => unregister(preset.id);
			}

			function unregister(id) {
				registered.delete(id);
				if (activeId === id) select(DEFAULT_ID);
				else notify();
			}

			/** Select a preset id ("system" and "custom" are built-in ids). */
			function select(id) {
				const exists = id === DEFAULT_ID || id === CUSTOM_ID || allPresets().some((preset) => preset.id === id);
				if (!exists) throw new Error(`unknown font preset: ${id}`);
				activeId = id;
				applyStyle();
				persist();
				notify();
			}

			/** Apply a user-imported custom set (empty lists clear it). */
			function selectCustom(ui, code) {
				const normalize = (faces) =>
					faces.map((face) => ({
						family: face.family,
						weight: String(face.weight ?? "400"),
						display: face.display ?? "swap",
						src: face.src ?? []
					}));
				const next = { ui: normalize(ui), code: normalize(code) };
				if (next.ui.length === 0 && next.code.length === 0) {
					clearCustom();
					return;
				}
				custom = next;
				activeId = CUSTOM_ID;
				applyStyle();
				persist();
				notify();
			}

			function clearCustom() {
				custom = null;
				select(DEFAULT_ID);
			}

			function subscribe(listener) {
				listeners.add(listener);
				return () => listeners.delete(listener);
			}

			/**
			 * Restore persisted prefs. A selected preset that is not registered
			 * yet (a plugin preset loading after us) is remembered and applied
			 * when that preset registers.
			 */
			function restore(prefs) {
				if (prefs?.custom && (prefs.custom.ui?.length || prefs.custom.code?.length)) {
					custom = prefs.custom;
					applyStyle();
				}
				const selected = prefs?.selected;
				if (!selected || selected === DEFAULT_ID) {
					applyStyle();
					return;
				}
				if (selected === CUSTOM_ID) {
					select(CUSTOM_ID);
					return;
				}
				if (allPresets().some((preset) => preset.id === selected)) select(selected);
				else pendingId = selected;
			}

			/** Plugin unload: drop the override sheet and listeners. */
			function dispose() {
				document.getElementById(STYLE_ID)?.remove();
				listeners.clear();
			}

			return {
				register,
				unregister,
				select,
				selectCustom,
				clearCustom,
				getSnapshot,
				subscribe,
				restore,
				dispose
			};
		}
		//#endregion

		//#region dsh-fonts: settings row subscription
		/**
		 * Font row subscription: the row re-renders on registry snapshots via
		 * react.useSyncExternalStore (the snapshot revision is the value) and
		 * reads the live snapshot itself. Since DSH 0.1.2 the frozen module
		 * table has no dsh-client-runtime, so nothing in this bundle may
		 * require() that package — snapshot stores are plugin-owned here.
		 */
		const fontListeners = new Set();
		function emitFonts() {
			for (const listener of [...fontListeners]) listener();
		}
		//#endregion

		//#region dsh-fonts: settings row
		/** Inline style sheet for the row (kept dependency-free). */
		const styles = {
			group: {
				borderBottom: "1px solid var(--dsw-alias-border-l2)",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				padding: "16px 0"
			},
			title: {
				color: "var(--dsw-alias-label-primary)",
				fontSize: "14px",
				fontWeight: 400,
				lineHeight: "22px"
			},
			grid: {
				display: "flex",
				flexWrap: "wrap",
				gap: "10px"
			},
			card: {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "6px",
				flex: "1 1 108px",
				minWidth: 0,
				padding: "3px",
				borderRadius: "10px",
				// longhand on purpose: the shorthand leaves borderColor to
				// fall back to currentColor once React clears the selected
				// override, painting stale black/white boxes on deselect
				borderWidth: "2px",
				borderStyle: "solid",
				borderColor: "transparent",
				background: "transparent",
				cursor: "pointer",
				font: "inherit",
				boxSizing: "border-box"
			},
			cardSelected: {
				borderColor: "var(--dsw-alias-brand-primary)",
				background: "var(--dsw-alias-interactive-bg-hover)"
			},
			cardLabel: {
				color: "var(--dsw-alias-label-secondary)",
				fontSize: "12px",
				lineHeight: "16px",
				textAlign: "center",
				overflow: "hidden",
				maxWidth: "100%"
			},
			cardLabelSelected: {
				color: "var(--dsw-alias-label-primary)"
			},
			swatch: {
				width: "100%",
				height: "52px",
				borderRadius: "8px",
				boxSizing: "border-box",
				padding: "8px 10px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: "4px",
				border: "1px solid var(--dsw-alias-border-l2)",
				overflow: "hidden"
			},
			swatchUi: {
				fontSize: "18px",
				lineHeight: "22px",
				color: "var(--dsw-alias-label-primary)",
				whiteSpace: "nowrap"
			},
			swatchCode: {
				fontSize: "12px",
				lineHeight: "16px",
				color: "var(--dsw-alias-label-secondary)",
				whiteSpace: "nowrap"
			},
			defaultSwatch: {
				width: "100%",
				height: "52px",
				borderRadius: "8px",
				boxSizing: "border-box",
				display: "flex",
				overflow: "hidden",
				border: "1px solid var(--dsw-alias-border-l2)"
			},
			editor: {
				display: "flex",
				flexDirection: "column",
				gap: "10px"
			},
			editorSection: {
				display: "flex",
				flexDirection: "column",
				gap: "6px"
			},
			editorSectionTitle: {
				color: "var(--dsw-alias-label-secondary)",
				fontSize: "12px",
				lineHeight: "16px"
			},
			editorEntry: {
				display: "flex",
				alignItems: "center",
				gap: "8px",
				color: "var(--dsw-alias-label-secondary)",
				fontSize: "12px",
				lineHeight: "16px"
			},
			editorEntryName: {
				flex: "auto",
				minWidth: 0,
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap"
			},
			editorForm: {
				display: "flex",
				alignItems: "center",
				gap: "8px",
				flexWrap: "wrap"
			},
			inputFamily: {
				width: "150px"
			},
			inputUrl: {
				flex: "1 1 220px"
			},
			weightSelector: {
				display: "flex",
				alignItems: "center",
				gap: "4px",
				boxSizing: "border-box",
				height: "28px",
				padding: "0 8px",
				borderRadius: "8px",
				border: "1px solid var(--dsw-alias-border-l2)",
				background: "transparent",
				color: "var(--dsw-alias-label-primary)",
				fontSize: "12px",
				lineHeight: "16px",
				cursor: "pointer"
			},
			hint: {
				color: "var(--dsw-alias-label-tertiary)",
				fontSize: "12px",
				lineHeight: "16px"
			},
			error: {
				color: "var(--dsw-alias-state-error-primary)",
				fontSize: "12px",
				lineHeight: "16px"
			}
		};

		/** "Aa" + code-sample preview rendered in the preset's own fonts. */
		function FontPreview({ uiStack, codeStack }) {
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.swatch,
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						style: { ...styles.swatchUi, fontFamily: uiStack },
						children: "Aa 字体"
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: { ...styles.swatchCode, fontFamily: codeStack },
						children: "1lI0 O0"
					})
				]
			});
		}

		/** "Default" chip: the shipped system stacks (light + dark halves). */
		function DefaultSwatch() {
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.defaultSwatch,
				children: [
					(0, react_jsx_runtime.jsx)("div", { style: { flex: 1, background: "#f4f4f5" } }),
					(0, react_jsx_runtime.jsx)("div", { style: { flex: 1, background: "#1c1c20" } })
				]
			});
		}

		/** One selectable font card. */
		function FontCard({ id, uiStack, codeStack, label, selected, onSelect }) {
			return (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: (event) => {
					onSelect();
					// drop focus so a stale focus ring never outlives the selection
					event.currentTarget.blur();
				},
				"aria-pressed": selected,
				style: {
					...styles.card,
					...(selected ? styles.cardSelected : {})
				},
				children: [
					(0, react_jsx_runtime.jsx)(FontPreview, { uiStack, codeStack }),
					(0, react_jsx_runtime.jsx)("span", {
						style: {
							...styles.cardLabel,
							...(selected ? styles.cardLabelSelected : {})
						},
						children: label
					})
				]
			});
		}

		/** One custom-font editor section (kind: "ui" | "code"). */
		function CustomSection({ title, kind, faces, otherFaces, registry, t }) {
			const [family, setFamily] = react.useState("");
			const [url, setUrl] = react.useState("");
			const [weight, setWeight] = react.useState("400");
			const [weightOpen, setWeightOpen] = react.useState(false);
			const [error, setError] = react.useState(false);

			const applyBoth = (next, others) =>
				kind === "ui" ? registry.selectCustom(next, others) : registry.selectCustom(others, next);

			const submit = () => {
				const trimmedFamily = family.trim();
				const trimmedUrl = url.trim();
				const valid = trimmedFamily.length > 0 && /^https?:\/\/\S+\.woff2$/i.test(trimmedUrl);
				if (!valid) {
					setError(true);
					return;
				}
				setError(false);
				setFamily("");
				setUrl("");
				const entry = { family: trimmedFamily, weight, display: "swap", src: [trimmedUrl] };
				const next = [...faces.filter((face) => !(face.family === trimmedFamily && face.weight === weight)), entry];
				applyBoth(next, otherFaces);
			};

			const remove = (entry) => {
				const next = faces.filter((face) => face !== entry);
				applyBoth(next, otherFaces);
			};

			const weightOptions = ["400", "500", "600", "700"];

			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.editorSection,
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.editorSectionTitle,
						children: title
					}),
					faces.length === 0
						? (0, react_jsx_runtime.jsx)("div", {
								style: styles.hint,
								children: t("font.custom.empty")
							})
						: faces.map((face) => (0, react_jsx_runtime.jsxs)("div", {
								style: styles.editorEntry,
								children: [
									(0, react_jsx_runtime.jsx)("span", {
										style: styles.editorEntryName,
										children: `${face.family} (${t(`font.weight.${face.weight}`)}) — ${face.src[0]}`
									}),
									(0, react_jsx_runtime.jsx)(_primitives.Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => remove(face),
										style: { color: "var(--dsw-alias-state-error-primary)" },
										children: t("font.custom.remove")
									})
								]
							}, face.family + face.weight + (face.src[0] ?? ""))),
					(0, react_jsx_runtime.jsxs)("div", {
						style: styles.editorForm,
						children: [
							(0, react_jsx_runtime.jsx)(_primitives.Input, {
								value: family,
								onChange: (event) => setFamily(event.target.value),
								placeholder: t("font.custom.family"),
								style: styles.inputFamily
							}),
							(0, react_jsx_runtime.jsx)(_primitives.Input, {
								value: url,
								onChange: (event) => setUrl(event.target.value),
								placeholder: t("font.custom.url"),
								style: styles.inputUrl
							}),
							(0, react_jsx_runtime.jsx)(_primitives.Menu, {
								open: weightOpen,
								onClose: () => setWeightOpen(false),
								items: weightOptions.map((id) => ({ id, label: t(`font.weight.${id}`) })),
								selectedId: weight,
								onSelect: (id) => {
									setWeight(id);
									setWeightOpen(false);
								},
								align: "start",
								portal: true,
								compact: true,
								dense: true,
								anchor: (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									style: styles.weightSelector,
									"aria-haspopup": "menu",
									"aria-expanded": weightOpen,
									onClick: () => setWeightOpen((v) => !v),
									children: [
										t(`font.weight.${weight}`),
										(0, react_jsx_runtime.jsx)(_primitives.IconChevronDownOutline14, { size: 14 })
									]
								})
							}),
							(0, react_jsx_runtime.jsx)(_primitives.Button, {
								variant: "outline",
								size: "sm",
								onClick: () => submit(),
								children: t("font.custom.add")
							})
						]
					}),
					error
						? (0, react_jsx_runtime.jsx)("div", {
								style: styles.error,
								children: t("font.custom.invalid")
							})
						: null
				]
			});
		}

		/** One custom-face editor section wired to the registry. */
		function CustomEditor({ registry, custom, t }) {
			const uiFaces = custom?.ui ?? [];
			const codeFaces = custom?.code ?? [];
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.editor,
				children: [
					(0, react_jsx_runtime.jsx)(CustomSection, {
						title: t("font.custom.ui"),
						kind: "ui",
						faces: uiFaces,
						otherFaces: codeFaces,
						registry,
						t
					}),
					(0, react_jsx_runtime.jsx)(CustomSection, {
						title: t("font.custom.code"),
						kind: "code",
						faces: codeFaces,
						otherFaces: uiFaces,
						registry,
						t
					})
				]
			});
		}

		/**
		 * Font picker row registered into the Settings → General item slot,
		 * before the Appearance/theme rows: a Default chip, one card per
		 * preset, a Custom card once custom faces exist, and the import
		 * editor.
		 */
		function FontRow({ t, getFontRevision, subscribeFonts, registry }) {
			// re-render on every registry snapshot (the revision is the
			// subscribed value); the data is read from the live snapshot below
			react.useSyncExternalStore(subscribeFonts, getFontRevision);
			const snapshot = registry.getSnapshot();
			const activeId = snapshot.activeId;
			const customCount = (snapshot.custom?.ui.length ?? 0) + (snapshot.custom?.code.length ?? 0);
			const custom = snapshot.custom;
			const bundled = PRESETS.filter((preset) => preset.id !== DEFAULT_ID);
			const customStack = (fams, tail) =>
				[...(fams ?? []).map((face) => face.family), ...tail].join(", ");
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.group,
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.title,
						children: t("font.title")
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						style: styles.grid,
						children: [
							(0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: (event) => {
									registry.select(DEFAULT_ID);
									event.currentTarget.blur();
								},
								"aria-pressed": activeId === DEFAULT_ID,
								style: {
									...styles.card,
									...(activeId === DEFAULT_ID ? styles.cardSelected : {})
								},
								children: [
									(0, react_jsx_runtime.jsx)(DefaultSwatch, {}),
									(0, react_jsx_runtime.jsx)("span", {
										style: {
											...styles.cardLabel,
											...(activeId === DEFAULT_ID ? styles.cardLabelSelected : {})
										},
										children: t("font.default")
									})
								]
							}),
							bundled.map((preset) => (0, react_jsx_runtime.jsx)(FontCard, {
								id: preset.id,
								uiStack: preset.ui.join(", "),
								codeStack: preset.code.join(", "),
								label: t(`font.${preset.id}`),
								selected: activeId === preset.id,
								onSelect: () => registry.select(preset.id)
							}, preset.id)),
							customCount > 0
								? (0, react_jsx_runtime.jsx)(FontCard, {
										id: CUSTOM_ID,
										uiStack: customStack(custom?.ui, SYSTEM.ui),
										codeStack: customStack(custom?.code, SYSTEM.code),
										label: t("font.custom"),
										selected: activeId === CUSTOM_ID,
										onSelect: () => registry.select(CUSTOM_ID)
									})
								: null
						]
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.hint,
						children: t("font.weightHint")
					}),
					(0, react_jsx_runtime.jsx)(CustomEditor, { registry, custom, t })
				]
			});
		}
		//#endregion

		//#region dsh-fonts: client plugin body
		/**
		 * Required services: slots/locale (the settings row). Fonts are applied
		 * through an injected stylesheet, persistence is localStorage — no
		 * theme or settings transport is needed.
		 */
		const inject = [
			"slots",
			"locale"
		];

		/**
		 * Client plugin body: provide the font registry as `ctx.fonts`,
		 * restore the saved selection, keep the row's store in sync with the
		 * registry snapshot, and register the picker into Settings → General.
		 * @param ctx - client cordis context.
		 */
		function apply(ctx) {
			const registry = createRegistry();
			ctx.provide("fonts", registry);
			ctx.effect(() => () => {
				registry.dispose();
			}, "dsh-fonts: registry disposal");

			// Unlike themes, font CSS overrides never fight an async boot
			// adoption, so a plain restore at apply time is sufficient.
			registry.restore(readPrefs());

			const unsubscribe = registry.subscribe(() => {
				emitFonts();
			});
			ctx.effect(() => unsubscribe, "dsh-fonts: row subscription");

			ctx.effect(() => ctx.locale.register(SETTINGS_NS, {
				zh,
				en
			}), "dsh-fonts: settings row dictionaries");

			const fontInjected = () => ({
				registry,
				getFontRevision: () => registry.getSnapshot().revision,
				subscribeFonts: (listener) => {
					fontListeners.add(listener);
					return () => {
						fontListeners.delete(listener);
					};
				}
			});
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "fonts",
				order: 18,
				locale: SETTINGS_NS,
				inject: fontInjected
			}, FontRow));
		}
		//#endregion

		exports.SETTINGS_NS = SETTINGS_NS;
		exports.DEFAULT_ID = DEFAULT_ID;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
