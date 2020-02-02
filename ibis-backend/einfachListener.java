// Generated from einfach.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link einfachParser}.
 */
public interface einfachListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link einfachParser#einfach_program}.
	 * @param ctx the parse tree
	 */
	void enterEinfach_program(einfachParser.Einfach_programContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#einfach_program}.
	 * @param ctx the parse tree
	 */
	void exitEinfach_program(einfachParser.Einfach_programContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#import_specification}.
	 * @param ctx the parse tree
	 */
	void enterImport_specification(einfachParser.Import_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#import_specification}.
	 * @param ctx the parse tree
	 */
	void exitImport_specification(einfachParser.Import_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#create_specification}.
	 * @param ctx the parse tree
	 */
	void enterCreate_specification(einfachParser.Create_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#create_specification}.
	 * @param ctx the parse tree
	 */
	void exitCreate_specification(einfachParser.Create_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#insert_specification}.
	 * @param ctx the parse tree
	 */
	void enterInsert_specification(einfachParser.Insert_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#insert_specification}.
	 * @param ctx the parse tree
	 */
	void exitInsert_specification(einfachParser.Insert_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#insert_type}.
	 * @param ctx the parse tree
	 */
	void enterInsert_type(einfachParser.Insert_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#insert_type}.
	 * @param ctx the parse tree
	 */
	void exitInsert_type(einfachParser.Insert_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#copy_specification}.
	 * @param ctx the parse tree
	 */
	void enterCopy_specification(einfachParser.Copy_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#copy_specification}.
	 * @param ctx the parse tree
	 */
	void exitCopy_specification(einfachParser.Copy_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#tag}.
	 * @param ctx the parse tree
	 */
	void enterTag(einfachParser.TagContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#tag}.
	 * @param ctx the parse tree
	 */
	void exitTag(einfachParser.TagContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#component}.
	 * @param ctx the parse tree
	 */
	void enterComponent(einfachParser.ComponentContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#component}.
	 * @param ctx the parse tree
	 */
	void exitComponent(einfachParser.ComponentContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#buttons}.
	 * @param ctx the parse tree
	 */
	void enterButtons(einfachParser.ButtonsContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#buttons}.
	 * @param ctx the parse tree
	 */
	void exitButtons(einfachParser.ButtonsContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#button}.
	 * @param ctx the parse tree
	 */
	void enterButton(einfachParser.ButtonContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#button}.
	 * @param ctx the parse tree
	 */
	void exitButton(einfachParser.ButtonContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#strings}.
	 * @param ctx the parse tree
	 */
	void enterStrings(einfachParser.StringsContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#strings}.
	 * @param ctx the parse tree
	 */
	void exitStrings(einfachParser.StringsContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(einfachParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(einfachParser.StringContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#attribute}.
	 * @param ctx the parse tree
	 */
	void enterAttribute(einfachParser.AttributeContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#attribute}.
	 * @param ctx the parse tree
	 */
	void exitAttribute(einfachParser.AttributeContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#parameters}.
	 * @param ctx the parse tree
	 */
	void enterParameters(einfachParser.ParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#parameters}.
	 * @param ctx the parse tree
	 */
	void exitParameters(einfachParser.ParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(einfachParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(einfachParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#attribute_type}.
	 * @param ctx the parse tree
	 */
	void enterAttribute_type(einfachParser.Attribute_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#attribute_type}.
	 * @param ctx the parse tree
	 */
	void exitAttribute_type(einfachParser.Attribute_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#name_tag}.
	 * @param ctx the parse tree
	 */
	void enterName_tag(einfachParser.Name_tagContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#name_tag}.
	 * @param ctx the parse tree
	 */
	void exitName_tag(einfachParser.Name_tagContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#value}.
	 * @param ctx the parse tree
	 */
	void enterValue(einfachParser.ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#value}.
	 * @param ctx the parse tree
	 */
	void exitValue(einfachParser.ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#url}.
	 * @param ctx the parse tree
	 */
	void enterUrl(einfachParser.UrlContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#url}.
	 * @param ctx the parse tree
	 */
	void exitUrl(einfachParser.UrlContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#parameter_specification}.
	 * @param ctx the parse tree
	 */
	void enterParameter_specification(einfachParser.Parameter_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#parameter_specification}.
	 * @param ctx the parse tree
	 */
	void exitParameter_specification(einfachParser.Parameter_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#text}.
	 * @param ctx the parse tree
	 */
	void enterText(einfachParser.TextContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#text}.
	 * @param ctx the parse tree
	 */
	void exitText(einfachParser.TextContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#import_types}.
	 * @param ctx the parse tree
	 */
	void enterImport_types(einfachParser.Import_typesContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#import_types}.
	 * @param ctx the parse tree
	 */
	void exitImport_types(einfachParser.Import_typesContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#command_specification}.
	 * @param ctx the parse tree
	 */
	void enterCommand_specification(einfachParser.Command_specificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#command_specification}.
	 * @param ctx the parse tree
	 */
	void exitCommand_specification(einfachParser.Command_specificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link einfachParser#optional_number}.
	 * @param ctx the parse tree
	 */
	void enterOptional_number(einfachParser.Optional_numberContext ctx);
	/**
	 * Exit a parse tree produced by {@link einfachParser#optional_number}.
	 * @param ctx the parse tree
	 */
	void exitOptional_number(einfachParser.Optional_numberContext ctx);
}